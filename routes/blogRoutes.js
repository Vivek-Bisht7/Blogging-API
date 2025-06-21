const express = require('express');
const router = express.Router();
const {createBlog , getAllBlogs , getBlogsByID ,updateBlog,deleteBlog} = require('../controllers/blogController');

router.get('/' , getAllBlogs());
router.get('/:id' , getBlogsByID());
router.post('/', createBlog());
router.get('/:id' , updateBlog());
router.get('/:id' , deleteBlog());


module.exports = router;