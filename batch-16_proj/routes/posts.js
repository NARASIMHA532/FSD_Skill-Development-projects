const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create a new post
// Create a new post
router.post('/', async (req, res, next) => {
    const post = new Post(req.body);
    try {
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
});

// Get all posts
router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.find().populate('userId');
        res.json(posts);
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
});

// Add a comment to a post
router.post('/:postId/comments', async (req, res, next) => {
    const { postId } = req.params;
    const { userId, comment } = req.body;

    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.comments.push({ userId, comment });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
});


module.exports = router;
