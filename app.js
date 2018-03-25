// requerimos express
const EXPRESS = require('express');
// requerimos path para las rutas
const PATH = require('path');
// requerimos sql para la BD
const mysql=require('mysql');

const APP = EXPRESS();

APP.listen(8080, () => console.log("He levantado el puerto 8080"));

APP.use('/assets',EXPRESS.static('assets'));
APP.use('/bower_components',EXPRESS.static('bower_components'));

// rutas
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


// base de datos

/*
// conectamos con la base de datos

*/
var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root'
    });


    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });

// creamos la base de datos de la actividad y la tabla de ususarios

    //creamos la base de datos
/*
    con.query("CREATE DATABASE Actividad3", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });*/

// utilizamos la base de datos
    con.query('USE Actividad3');

//creamos la tabla usuarios
    /*
    var sql = "CREATE TABLE usuarios (id INT AUTO_INCREMENT PRIMARY KEY, usuario VARCHAR(45), email VARCHAR(45), password enum('texto', 'sha1', 'md5') )";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

    */
//insertamos un usuarios
/*
    let nombre='pepe';
    let correo='pep@gmail.com';
    let clave='a906449d5769fa7361d7ecc6aa3f6d28';

    var sql ="INSERT INTO usuarios (usuario, email,password) VALUES ("+nombre+","+correo+","+clave+")";

    console.log("Usuario añadido");
*/


    function prueba() {
        alert('entra');
    }


    function registroUser(nombre,correo,clave) {
        alert('llega a la funcion');
        var sql ="INSERT INTO usuarios (usuario, email,password) VALUES ("+nombre+","+correo+","+clave+")";

    }