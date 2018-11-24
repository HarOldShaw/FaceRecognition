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
        check_empty: 0,
    },
    json: true // Automatically stringifies the body to JSON
});

async function deleteFaceSet(req,res){
    const {outer_id} = req.body
    await rp.post(API_URL,options(outer_id),(error,data)=>{
        if(error) return res.status(400).send(error)
        console.log(data)
        return res.json(data)
    })
}

module.exports = deleteFaceSet