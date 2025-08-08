const mongoose =require('mongoose')

const userschema = require('../schema/UserSchema.js')


const User = mongoose.model("Users",userschema)  //نعرف model باسم الجدول 

module.exports = User


