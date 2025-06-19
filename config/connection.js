// I know ki db ke andar 4 steps hote hain
// 1> Require mongoose
// 2> mongoose.connect
// 3> Create schema
// 4> module.exports

// to connection.js mai hum 1,2,4 ko perform karenge 
// aur schemas hum model folder ki files mai banaenge


const mongoose = require('mongoose');

// async means this function contains asynchrnous code
const connectDB = async (url)=>{
    try{
        //using await here means wait for database to connect and do not execute program further
        await mongoose.connect(url);
        console.log('Database connected');
    }
    catch(error){
        console.log('Database connection failed');
        process.exit(1);
    }
    
};

module.exports = connectDB;

