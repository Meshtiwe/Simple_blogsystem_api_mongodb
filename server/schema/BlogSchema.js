const mongoose = require('mongoose')

const Schema = mongoose.Schema


const Blogschema = new Schema({
    title:{
        type:String
    },

    body:{
        type:String

    },

    imag:{

        type:String
    },

    date:{

        type:Date
    },


    createdby:{

        type:String
    }
})




module.exports=Blogschema
