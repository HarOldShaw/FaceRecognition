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

async function searchFace(path){
    const req = await rp.post(API_URL,options(path))
    const searchResult = req.results
    if(searchResult===null){
        console.log("no result")
        return false;
    }else if(searchResult[0].confidence > 80){
        console.log("Face found")
        return true;
    }
    console.log("no similar face found")
    return false;
}

// searchFace().catch(err => {
//     console.log("error found: ",err)
// })
module.exports = searchFace
