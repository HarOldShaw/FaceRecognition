const mongoose = require('mongoose')
const User = require("../../models/User")
const detectFace = require("../detectFace")
const removeFace = require("../removeFace")
const addFacetoSet = require("../addFacetoSet")

async function addUser(req,res){
    const{name,gender,faceImagePath,period,room,set_id} = req.body
    const face_token = await detectFace(faceImagePath)
    // console.log("face_token",face_token,"name:",name,"faceImagePath:",path,"period:",period,"room:",room)
    addFacetoSet(face_token,set_id) 
    User.create({
        _id: face_token, 
        name,
        gender,
        faceImagePath,
        period,
        room
    },(error,data)=>{
        if(error) return res.status(400).send(error)
        console.log("user added", data)
        return res.json({message: "User added:", "id": data._id,"name": data.name})
    })
}


async function getUser(req,res){
    const {name} = req.body
    User.find({name},(error,data)=>{
        if(error) return res.status(400).send(error)
        console.log("userget:",data)
        return res.json({message: "user get:",data}) 
    })
}

async function removeUser(req,res){
    const {_id} = req.body
    User.findById({_id},(error1,data)=>{   
        if(error1) return res.status(400).send(error1)
        console.log("user find:",data)
        User.findByIdAndDelete(_id,(error2,user)=>{
            if(error2) return res.status(400).send(error2)
            console.log("dataid:",data._id)
            removeFace(data.id)
            return res.json({message:"user remove:",data})
        })
    })
}


module.exports = {addUser,getUser,removeUser}