const rp = require('request-promise')
const fs = require('fs')
const {API_KEY,API_SECRET} = require('../config')
const API_URL = "https://api-cn.faceplusplus.com/facepp/v3/detect"
const User = require("../models/User")

var options = (path) =>({
    method: 'POST',
    formData: {
        api_secret: API_SECRET,
        api_key: API_KEY,
        image_file : fs.createReadStream(path),
        return_attributes: 'gender,age,smiling,eyestatus'
    },
    json: true // Automatically stringifies the body to JSON
});

async function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

async function detectFace(path){
    const req = await rp.post(API_URL,options(path))
    // console.log("face_token:",req.faces[0].face_token)
    //list
    //return req.faces.map(face=>face.face_token)
    return req.faces[0].face_token
}


// const path = "./data/photo.jpg"
// detectFace(path).catch(err => {
//     console.log("error found: ",err)
// })

module.exports = detectFace
