// Requires

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Rutes

var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');




// Concexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, resp) => {

    if (err) throw err;
    console.log('Server Mogoose BD funcionando en el puerto 27017: \x1b[32m%s\x1b[0m', ' on line');

});


// Listen Routes

app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);

app.listen(3000, () => {

    console.log('Server Express funcionando en el puerto 3000: \x1b[32m%s\x1b[0m', ' on line');

});