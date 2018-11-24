const rp = require('request-promise')
const fs = require('fs')
const {API_KEY,API_SECRET} = require('../config')
const API_URL = "https://api-cn.faceplusplus.com/facepp/v3/faceset/delete"

var options =(id)=> ({
    method: 'POST',
    formData: {
        api_key: API_KEY,
        api_secret: API_SECRET,
        outer_id: id,
        check_empty: 1,
    },
    json: true // Automatically stringifies the body to JSON
});

async function deleteFaceSet(id){
    const req = await rp.post(API_URL,options(id))
    console.log(req)
}

module.exports = deleteFaceSet