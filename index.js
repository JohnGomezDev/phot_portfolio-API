'use strict'

const mongoose = require('mongoose');
const app = require('./app');

//URI de base de datos local
// const uri = 'mongodb://localhost:27017/photo_portfolio';

//URI base de datos en MongoAtlas
const uri = 'mongodb://test:12345@cluster0-shard-00-00-4u1mx.mongodb.net:27017,cluster0-shard-00-01-4u1mx.mongodb.net:27017,cluster0-shard-00-02-4u1mx.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

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

