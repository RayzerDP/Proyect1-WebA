'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProjectSchema = Schema({
    name: String,
    descripcion: String,
    categoria: String,
    lenguajes: String
})

module.exports = mongoose.model('Project', ProjectSchema)
//project guarda los documentos en la coleccion