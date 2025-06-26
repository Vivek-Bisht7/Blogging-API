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

const getBlog = async (req,res) => {
    try{
        const {id} = req.params;
        const blog = await Blog.findById(id); 

        if(!blog){
            return res.status(404).json({
                success:false,
                message : "Blog not found with this id"
            })
        }

        console.log("Blog successfully found!!");
        res.status(200).json({
            success:true,
            message:"Blog found successfully",
            blog
        });
    }
    catch(error){
        console.log("Failed to find blog");
        res.status(500).json({
            success:false,
            message:"Blog not found" ,
            error : error.message
        });
    }
}

const deleteBlog = async (req,res) => {
    try{
        const {id} = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id); 

        if(!deletedBlog){
            return res.status(404).json({
                success:false,
                message : "Failed to delete blog with this id"
            })
        }

        console.log("Blog successfully deleted!!");
        res.status(200).json({
            success:true,
            message:"Blog deleted successfully",
            deletedBlog
        });
    }
    catch(error){
        console.log("Failed to delete blog");
        res.status(500).json({
            success:false,
            message:"Blog not deleted" ,
            error : error.message
        });
    }
}

module.exports = {createBlog , getAllBlogs , getBlog , deleteBlog};