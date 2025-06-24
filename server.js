const express = require('express');
const app = express();
const dbConnection = require('./config/connection');
const blog = require('./models/blog');

app.use(express.json());

dbConnection("mongodb://127.0.0.1:27017/db");

app.get('/' , (req,res)=>{
    res.send("Hey");
})

app.listen(3000);