'use strict'

const PictureModel = require('../models/picture');
const fs = require('fs');
const path = require('path');
const commonCallBacks = require('./common');
const size = require('image-size');

const controller = {
    
    //Guardar un documento de imagen en la base de datos
    savePictureTitle: (req, res) => {
        
        let body = req.body;

        let newPicture = new PictureModel();
        newPicture.title = body.title;

        newPicture.save((error, savedPicture) => {
           commonCallBacks(res, error, savedPicture);
        });
    },

    // Listar todas las imagenes
    getAllPictures: (req, res) => {
        PictureModel.find((error, images) => {
            commonCallBacks(res, error, images);
        });
    },

    //Subir imagen
    uploadPicture: (req, res) => {

        let pictureId = req.params.id;
        let fileName = 'Imagen no subida..';

        if (req.files) {
            let file = req.files.image;
            let filePath = file.path;

            fileName = filePath.split("\\")[1];
            let extension = fileName.split('.')[1];
            
            let dimesions = size(`./uploads/${fileName}`); //medidas de la imagen
            let width = dimesions.width;
            let height = dimesions.height;

            // Poner orientacion de la imagen de acuerdo a sus medidas
            let orientation = width > height ? 'short' : 'long';

            // Verificar que el archivo sea una imagen
            if(extension == 'jpg' || extension == 'jpeg' || extension == 'png') {

                //Actualizar el documento de imagen poniendo el nombre de esta
                PictureModel.findByIdAndUpdate(pictureId, {picture: fileName, orientation: orientation}, {new: true}, (error, updated) => {
                    commonCallBacks(res, error, updated);
                });

            } else {
                fs.unlink(filePath, (error) => {
                    res.send({message: 'Tipo de archivo no valido, sube una imagen'});
                });
            }
        }
    },

    //Obtener imagen
    getPicture: (req, res) => {

        let picture = req.params.picture;
        let filePath = `./uploads/${picture}`;

        //verificar existencia de la imagen buscada
        fs.exists(filePath, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(filePath));
            } else {
                return res.status(404).send('Image not found');
            }
        });
    }
};

module.exports = controller;