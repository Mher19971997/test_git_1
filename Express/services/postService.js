const Post = require('../models/postModel');

exports.getPostById = async (id) => {
    return await Post.findById(id).populate('author');
};

exports.createPost = async (postData) => {
    return await Post.create(postData);
};
