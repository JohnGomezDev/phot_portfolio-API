'use strict'

const mongoose = require('mongoose');
const app = require('./app');

const uri = 'mongodb://localhost:27017/photo_portfolio';
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Base de datos conectada');

            app.listen(port, () => {
                console.log(`Servidor corriendo en el puerto ${port}`);
            });
        })
        .catch((error) => console.log(error));

