const express = require('express');
const router = express.Router();
const {createBlog , getAllBlogs , getBlog , deleteBlog ,updateBlog} = require('../controllers/blogControllers');

router.get('/blogs' , getAllBlogs);
router.get('/blogs/:id' , getBlog);
router.post('/blogs' , createBlog);
router.delete('/blogs/:id' , deleteBlog);
router.put('/blogs/:id' , updateBlog);

module.exports = router;