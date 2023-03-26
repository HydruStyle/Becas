//importando dependencias
const express = require ('express')
const morgan = require ('morgan')
const ruta = require('./routes/rutas.js')
const { join } = require('path')
const { json } = require('body-parser')
const session = require('express-session')
const bcryptjs = require('bcryptjs')

//iniciando express
const app = express()
//Consifuracion para capturar datos de formulario
app.use(express.urlencoded({extended: true}))
app.use(express(json))

//configuracion de vistas ejs
app.set('views', join(__dirname + '/vistas'))
app.set('view engine', 'ejs')
app.use('/resources', express.static('public'))
app.use('/resources', express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/Documentos'))



app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))


//cargando las vistas
app.use(ruta)
app.use(morgan('dev'))

module.exports = app