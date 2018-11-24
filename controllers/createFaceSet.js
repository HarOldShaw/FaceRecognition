const rp = require('request-promise')
const fs = require('fs')
const {API_KEY,API_SECRET} = require('../config')
const API_URL = "https://api-cn.faceplusplus.com/facepp/v3/faceset/create"

const path = "./data/photo.jpg"


var options = (name,id,tags) => ({
    method: 'POST',
    formData: {
        api_key: API_KEY,
        api_secret: API_SECRET,
        display_name: name,
        outer_id: id,
        tags: tags,
    },
    json: true // Automatically stringifies the body to JSON
});

async function createFaceSet(name,id,tags){
    const req = await rp.post(API_URL,options(name,id,tags))
    console.log(req)
}

module.exports = createFaceSet
