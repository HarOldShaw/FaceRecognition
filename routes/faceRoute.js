const router = require('express').Router()
const createFaceSet = require("../controllers/createFaceSet")
const detectFace = require("../controllers/detectFace")
const searchFace = require("../controllers/searchFace")
const getDetail = require("../controllers/getDetail")
const {addUser,getUser,removeUser} = require("../controllers/UserData/user")

router.post("/addUser", addUser)
router.post("/getUser", getUser)
router.post("/removeUser", removeUser)
router.post("/getDetail",getDetail)
router.post("/searchFace",searchFace)



module.exports = router