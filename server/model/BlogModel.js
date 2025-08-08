const mongoose =require('mongoose')

const Blogschema = require('../schema/BlogSchema.js')


const Blog = mongoose.model('Blogs',Blogschema)



module.exports=Blog
