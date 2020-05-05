'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// ROUTES
const postRutes = require('./routes/post');
const formRutes = require('./routes/form');
const picRutes = require('./routes/picture');

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// MIDDLEWARES
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// RUTES CONFIG
app.use('/api', postRutes);
app.use('/api', picRutes);
app.use('/mail', formRutes);


module.exports = app;