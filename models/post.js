'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postSchema = schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);