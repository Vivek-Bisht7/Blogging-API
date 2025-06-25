const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:String,
    content:String,
    author:String,
    date:Number,
    tags:[String]
})

module.exports  = mongoose.model('Blog' , blogSchema);