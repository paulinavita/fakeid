const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    nama : String,
    img:String
}, {timestamps : true})



const User = mongoose.model('User', userSchema)
module.exports = {User}