const express = require('express');
const app = express();
const dbConnection = require('./config/connection');
const blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());
app.use('/api' , blogRoutes);

dbConnection("mongodb://127.0.0.1:27017/db");


app.listen(3000);