const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    createdAt : Date,
    updatedAt : Date,
    published : Boolean
});

module.exports = mongoose.model('Blog' , blogSchema);