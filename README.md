# Portafolio para fotografo/a API

Parte de backend de la aplicación de portafolio para fotografo/a, puedes ver el frontend [aquí](https://github.com/JohnGomezDev/phot_portfolio-frontend.git). Desarrollada con NodeJs, Express y Mongoose principalmente y librerias complementarias (nodemailer, image-size, connect-multiparty). 

## Caracteristicas
### Controladores (y sus metodos)
#### Posts: 
- Guardar post en base de datos 
- Listar todos los posts 
#### Form:
- Enviar formulario de contacto usando NodeMailer y el servicio de Gmail
#### Picture:
- Guardar imagen en base de datos (solo titulo)
- Subir imagen al servidor (archivo) y guardar nombre del archivo en su respectivo documento. Podrás notar el uso de la librería image-size para recoger las dimensiones de la imagen subida y determinar si es una imagen en vertical u horizontal
- Listar todas las imagenes
