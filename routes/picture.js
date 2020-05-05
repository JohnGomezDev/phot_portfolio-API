'use strict'

const express = require('express');
const router = express.Router();
const pictureController = require('../controllers/picture');

const connectMultiParty = require('connect-multiparty');
const CMMiddleware = connectMultiParty({uploadDir: './uploads'});

router.post('/save-picture', pictureController.savePictureTitle);
router.post('/upload-picture/:id', CMMiddleware, pictureController.uploadPicture);
router.get('/pictures', pictureController.getAllPictures);
router.get('/image/:picture', pictureController.getPicture);

module.exports = router;