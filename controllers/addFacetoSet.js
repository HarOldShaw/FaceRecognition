const rp = require('request-promise')
const fs = require('fs')
const {API_KEY,API_SECRET} = require('../config')
const API_URL = "https://api-cn.faceplusplus.com/facepp/v3/faceset/addface"

var options =(face_id,outer_id)=> ({
    method: 'POST',
    formData: {
        api_key: API_KEY,
        api_secret: API_SECRET,
        outer_id: outer_id,
        face_tokens: face_id,
    },
    json: true // Automatically stringifies the body to JSON
});

async function addFacetoSet(face_id,outer_id){
    const req = await rp.post(API_URL,options(face_id,outer_id))
    // console.log(req)
}

module.exports = addFacetoSet