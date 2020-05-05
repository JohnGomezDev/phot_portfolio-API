'use strict'

const PostModel = require('../models/post');
const commonCallBacks = require('./common');

const controller = {

    //Crear documento de post en la base de datos
    createPost: (req, res) => {
        let body = req.body;

        let newPost = new PostModel();
        newPost.title = body.title;
        newPost.content = body.content;

        newPost.save((error, savedPost) => {
            commonCallBacks(res, error, savedPost);
        });
    },

    // Listar todos los posts
    getAllposts: (req, res) => {
        PostModel.find((error, posts) => {
            commonCallBacks(res, error, posts);
        });
    },

};


module.exports = controller;