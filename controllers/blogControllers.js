const Blog = require('../models/blog');

const createBlog = async (req , res) => {
    try{
        const blog = new Blog(req.body);
        await blog.save();
        console.log('User Create Successfully');
        res.status(201).json({success:true , message : "Blog created successfully" , blog});
    }
    catch(error){
        console.error("Failed to create user" , error.message);
        res.status(500).json({success:false ,
            message : "Blog creation failed" , error : error.message
        });
    }
}

const getAllBlogs = async (req , res) => {
    try{
        const allBlogs = await Blog.find();
        console.log("Fetched all blogs successfully");
        res.status(200).json({success:true , 
            message: "Fetched all blogs successfully" ,
            allBlogs
        });
    }
    catch(error){
        console.error("Error while fetching " , error.message);
        res.status(500).json({
            success:false,
            message:"Failed to fetch blog",
            error : error.message
        });
    }
}

module.exports = {createBlog , getAllBlogs}