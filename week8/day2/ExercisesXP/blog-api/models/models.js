const { db } = require("../config/db.js");

module.exports = {
    createPost: async (postInfo) => {
        const { title, content } = postInfo;

        try {
            const [newPost] = await db('posts').insert(
                { title, content },
                ['id', 'title', 'content']
            );
            return newPost;
        } catch (error) {
            throw error;
        }
    },


    getAllPosts: async() => {
        try {
            const posts = await db("posts");
            return posts
        } catch(error) {
            throw error
        }
    },

    getPostById: async (id) => {
        try {
            const post = await db("posts").where({ id }).first();
            return post;
        } catch (error) {
            throw error;
        }
    },

    updatePostById: async (id, postData) => {
        try {
            const [updatedPost] = await db("posts")
                .where({ id })
                .update(postData, ['id', 'title', 'content']);
            return updatedPost;
        } catch (error) {
            throw error;
        }
    },

    deletePostById: async (id) => {
        try {
            const deletedPost = await db('posts').where({ id }).del();
            return deletedPost;
        } catch (error) {
            throw error;
        }
    }
};
