'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3069;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
.then(() => {
    console.log("conection true")

    //creacion servidor
    app.listen(port, () =>{
        console.log("server start localhost: 3069")
    })
})
.catch(err => console.log(err));