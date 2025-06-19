const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/connection');
const routes = require('./routes/blogRoutes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/api/blogs' , blogRoutes);

app.set('view engine' , 'ejs');

connectDB('mongodb://127.0.0.1:27017/db');

app.listen(3000);