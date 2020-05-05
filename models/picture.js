'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pictureSchema = schema({
    title: String,
    picture: String,
    orientation: String
});

module.exports = mongoose.model('Picture', pictureSchema);