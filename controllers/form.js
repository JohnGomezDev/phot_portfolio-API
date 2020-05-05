'use strict'

const nodemailer = require('nodemailer');

const controller = {

    sendForm: (req, res) => {

        let body = req.body;

        let trasnporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'millitos459@gmail.com',
                pass: 'Yoamoelfutbol1*'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: body.email,
            to: 'millitos459@gmail.com',
            subject: `Hola Camila, te escribe ${body.name}`,
            html: `
            <h2>Hola Camila, soy ${body.name}</h2>
            <p>
                ${body.message}
            </p>
            <h3>Datos de contacto de ${body.name}</h3>
            <ul>
                <li><strong>Telefono: </strong>${body.phone}</li>
                <li><strong>Email: </strong>${body.email}</li>
            </ul>
            `
        };

        trasnporter.sendMail(mailOptions, (error, result) => {
            if (error) {
                res.status(500).send({error: error});
            } else {
                res.status(200).send({message: 'Mail sent'});
            }
        });
    }
};

module.exports = controller;