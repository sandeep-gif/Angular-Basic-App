const mongoose = require('mongoose');

const Blog = mongoose.model('Blog',{
    title: { type: String },
    createdAt: { type: Date, default: Date.now },
    catagory: { type: String },
    description: { type: String },
    content: { type: String }
});

module.exports = Blog;
