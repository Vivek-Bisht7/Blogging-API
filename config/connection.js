const mongoose = require('mongoose');

const dbConnection = async (url)=>{
    try{
        await mongoose.connect(url);
        console.log("Database Connected Successfully");
    }
    catch(err){
        console.error("Database connection failed" , err.message);
        process.exit(1);
    }
}

module.exports = dbConnection;