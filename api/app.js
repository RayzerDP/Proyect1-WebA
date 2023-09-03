'use strict'

var express = require('express')
var bodyparser = require('body-parser')
var app = express();

//CARGAR ARCHIVOS DE RUTAS
var project_routes = require('./rutes/project')

//MIDDLEWARES
app.use(bodyparser.urlencoded({extended:false})) //configuracion necesaria para bodyparser
app.use(bodyparser.json()) //PARA CONVERTIR LOS OBJETOS EN JSON

//Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//rutas
app.use('/api', project_routes)

//EXPORTAR
module.exports = app
