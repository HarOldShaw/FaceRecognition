const express = require("express")
const fs = require("fs")
const debug = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const setRouter = require("./routes")
const app = express();
// const detectFace = require("./controllers/detectFace")
// const {addUser,getUser,removeUser} = require("./controllers/UserData/user")
// const createFaceSet = requir("./controllers/createFaceSet")
// const deleteFaceSet = requir("./controllers/deleteFaceSet")
// const searchFace = require("./controllers/searchFace")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

async function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

mongoose.connect("mongodb://kyrie.top:27017/patients",{useNewUrlParser: true },()=>{
    console.log("database connected")
})

setRouter(app)
app.listen(3333, () => {console.log("server started")});

// let nameList = []
// const files = fs.readdirSync("./data")
// files.forEach(function (item,index){
//     let stat = fs.lstatSync("./data/"+item)
//     if(stat.isDirectory()===false){
//         nameList.push("./data/"+item)
//     }
// })
// console.log(nameList)

// const path = "./data/test1.jpg"
// // addUser(path,"Robert","Male","11/24/2018-12/01/2018",602)
// // getDetail("patient_set")
// // getUser("Harold")
// // deleteFaceSet("patients")
// // createFaceSet("patients","patient_set","1")
// searchFace(path)
