'use strict'

const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.get('/posts', postController.getAllposts);
router.post('/create-post', postController.createPost);

module.exports = router;