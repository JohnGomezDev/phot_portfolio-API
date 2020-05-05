'use strict'

const express = require('express');
const router = express.Router();
const formController = require('../controllers/form');

router.post('/send', formController.sendForm);

module.exports = router;