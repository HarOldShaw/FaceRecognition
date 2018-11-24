const rp = require('request-promise')
const fs = require('fs')
const {API_KEY,API_SECRET} = require('../config')
const API_URL = "https://api-cn.faceplusplus.com/facepp/v3/faceset/getdetail"

var options =(id) =>({
    method: 'POST',
    formData: {
        api_key: API_KEY,
        api_secret: API_SECRET,
        outer_id: id
    },
    json: true // Automatically stringifies the body to JSON
});

async function getDetail(req,res){
    const {outer_id} = req.body
    rp.post(API_URL,options(outer_id),(error,data)=>{
        console.log("here")
        if(error) return res.status(400).send(error)
        console.log(data.body)
        return res.json({message: "faceset get:","body":data.body}) 
    })
}

// getDetail(id).catch(err => {
//     console.log("error found: ",err)
// })

module.exports = getDetail