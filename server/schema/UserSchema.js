const mongoose = require('mongoose')

const Schema = mongoose.Schema


const userschema = new Schema({
    username:{
        type:String
    },

    password:{
        type:String

    },
    email:{

        type:String
    },


    phone:{

        type:String
    }
})


module.exports=userschema



