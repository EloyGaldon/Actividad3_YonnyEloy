const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();

APP.listen(8080, () => console.log("He levantado el puerto 8080"));

APP.use('/assets',EXPRESS.static('assets'));
APP.use('/bower_components',EXPRESS.static('bower_components'));

APP.get('/registro',function (req,res) {
    res.sendFile(__dirname+"/public/registro.html");
});
APP.get('/',function (req,res) {
    res.sendFile(__dirname+"/index.html");
});
APP.get('/login',function (req,res) {
    res.sendFile(__dirname+"/public/iniciarsesion.html");
});
APP.use('/*',function(req, res) {
    res.sendFile(__dirname+'/public/404.html');
});
