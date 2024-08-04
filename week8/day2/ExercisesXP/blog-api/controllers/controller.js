const models = require("../models/models.js");

module.exports = {

    getAllPosts: async (req, res) => {
        try {
            const posts = await models.getAllPosts();
            res.json(posts);
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: "internal server error"})
        }
    },

    updatePost: async (req, res) => {
        try {
            const { id} = req.params;
            const { title, content } = req.body;

            const updatedPost = await models.updatePostById(id, { title, content });

            if (!updatedPost) {
                return res.status(404).json({ error: 'Post not found' });
            }

            res.json({
                message: 'Post updated successfully',
                post: updatedPost,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getPost: async (req, res) => {
        try {
            const { id} = req.params;
            const post = await models.getPostById(id); 

            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }
    
            res.json(post);
        } catch(error) {
            console.log(error);
            res.status(404).json({ error: "Post not found"})
        }
    },

    addPost: async (req, res) => {
        try {
            const { title, content } = req.body;
            const newPost = await models.createPost({ title, content });
            res.status(201).json(newPost);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    deletePost: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedPost = await models.deletePostById(id);

            if (!deletedPost) {
                return res.status(404).json({ error: 'Post not found' });
            }

            res.json({ message: 'Post deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};