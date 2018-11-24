const mongoose =require('mongoose')
const UserSchema = ({
    _id: String,
    name: String,
    gender: String,
    faceImagePath: String, 
    period: String,
    room: String
})

const User = mongoose.model("User",UserSchema)
module.exports = User

