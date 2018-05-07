// Requires

var express = require('express');
var mongoose = require('mongoose');

var app = express();

// Concexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, resp) => {

    if (err) throw err;
    console.log('Server Mogoose BD funcionando en el puerto 27017: \x1b[32m%s\x1b[0m', ' on line');

});

// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada con exito!!!'
    });
});

app.listen(3000, () => {

    console.log('Server Express funcionando en el puerto 3000: \x1b[32m%s\x1b[0m', ' on line');

});