const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();

app.use(express.json()); // Middleware to parse JSON

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// GET: Fetch all posts
app.get('/posts', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('hobby-forum');
        const posts = database.collection('posts');
        const allPosts = await posts.find().toArray();
        res.json(allPosts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

// POST: Create a new post
app.post('/posts', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('hobby-forum');
        const posts = database.collection('posts');
        const newPost = req.body;
        const result = await posts.insertOne(newPost);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
});

// PUT: Update a post by ID
app.put('/posts/:id', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('hobby-forum');
        const posts = database.collection('posts');
        const postId = req.params.id;
        const updatedPost = req.body;
        const result = await posts.updateOne(
            { _id: new ObjectId(postId) },
            { $set: updatedPost }
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
    }
});

// DELETE: Delete a post by ID
app.delete('/posts/:id', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('hobby-forum');
        const posts = database.collection('posts');
        const postId = req.params.id;
        const result = await posts.deleteOne({ _id: new ObjectId(postId) });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
