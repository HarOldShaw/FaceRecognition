const rp = require('request-promise')
const fs = require('fs')
const {API_KEY,API_SECRET} = require('../config')
const API_URL = 'https://api-cn.faceplusplus.com/facepp/v3/compare'

const photo1 = "./data/photo.jpg"
const photo2 = "./data/photo2.jpg"

const options =(token1,token2) =>({
    method: 'POST',
    formData: {
        api_key: API_KEY,
        api_secret: API_SECRET,
        face_token1: token1,
        // image_file1 : fs.createReadStream(photo1),
        // image_file2 : fs.createReadStream(photo2),
        face_token2: token2,
        return_attributes: 'gender,age,smiling,eyestatus'
    },
    json: true // Automatically stringifies the body to JSON
});

async function compareFace(token1,token2){
    const req = await rp.post(API_URL,options(token1,token2))
    if(req.confidence > 80){ 
        console.log("true") 
        return true
    }
    console.log("false")
    return false
}

// compareFace("69d99310f4b8aa18f248ca76bc732dd8","5a6cad226e6d9c39f84cf886e39e887e")

module.exports = compareFace