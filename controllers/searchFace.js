const rp = require('request-promise')
const fs = require('fs')
const {API_KEY,API_SECRET} = require('../config')
const API_URL = "https://api-cn.faceplusplus.com/facepp/v3/search"


var options = (path) =>({
    method: 'POST',
    formData: {
        api_key: API_KEY,
        api_secret: API_SECRET,
        image_file : fs.createReadStream(path),
        outer_id: "patient_set",
        return_result_count: 3
    },
    json: true // Automatically stringifies the body to JSON
});

async function searchFace(req,res){
    const {path} = req.body
    console.log("req.body:",req.body);
    rp.post(API_URL,options(path),(error,data)=>{
        if(error) return res.status(400).send(error)
        console.log("data:",data.body.results)
        const searchResult = data.body.results
        if(searchResult===null){
            console.log("no result")
            return res.send("false");
        }else if(searchResult[0].confidence > 80){
            console.log("Face found")
            return res.send("true");
        }
        console.log("no similar face found")
        return res.send("true");
    })
}

// searchFace().catch(err => {
//     console.log("error found: ",err)
// })
module.exports = searchFace
