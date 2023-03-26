const { Router } = require("express")
const conexion = require("../mysql/DBconexion")
const sentencias = require("../mysql/sql")
const multer = require('multer')
const bodyParser = require('body-parser')
const { retail } = require("googleapis/build/src/apis/retail")
const session = require('express-session')
bodyParser.json()

const ruta = Router()

/* Estableciendo rutas de acceso a las vistas */

ruta.get('/', (req, res) =>{
    res.render('becasCut')
})

ruta.get('/home', (req, res) =>{
    res.render('principal')
})

ruta.get('/principal', (req, res) =>{
    res.render('principal')
})

ruta.get('/formulario', (req, res) =>{
    res.render('formulario')
})

ruta.get('/login', (req, res) => {
    res.render('login')
})

ruta.get('/loginAlumno', (req, res) =>{
    res.render('loginAlumno')
})

ruta.get('/loginAdmin', (req, res) =>{
    res.render('loginAdmin')
})

ruta.get('/Logout', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('login')
    })
})

ruta.get('/Logout2', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('loginAlumno')
    })
})

ruta.get('/registrarAdmin', (req, res) =>{
    res.render('registrarAdmin')
})

ruta.get('/registroAlumno', (req, res) => {
    res.render('registroAlumno')
})

ruta.get('/subirArchivos', (req, res) => {
    res.render('subirArchivos')
})

ruta.get('/home/:codigo', (req, res) => {
    res.render('principal', {login: true, codigo: req.session.codigo})
})

ruta.get('/downFormato', (req, res) => {
    res.download('src/public/archivos/formato_solicitud_beca_alimentaria_cutonala_2022-b.doc', function (error) {
        console.log(error)
        res.render('principal')
    })
})

ruta.get('/downCovocatoriaAlimentos', (req, res) => {
    res.download('src/public/archivos/b-convocatoria_alimentos_-apoyo_economico-2022-b.pdf', function (error) {
        console.log(error)
        res.render('principal')
    })

})

/* Estableciendo rutas de peticiones y sentencias SQL */

ruta.get('/adminPrincipal', sentencias.verRegistros )

ruta.get('/validar/:codigo', sentencias.validar)

ruta.get('/verDoc/:codigo', sentencias.verDoc)

ruta.get('/documento/:nombreArchivo', sentencias.documento)

ruta.get('/comprobarRegistro/:codigo', sentencias.comprobarRegistro)

ruta.get('/statusRegistro/:codigo', sentencias.statusRegistro)

ruta.get('/datosRegistro/:codigo', sentencias.datosRegistro)

ruta.post('/validarDocumentos', sentencias.validarDocumentos)

ruta.post('/login', sentencias.login)

ruta.post('/registrarAdmin', sentencias.registrarAdmin)

ruta.post('/registroAlumno', sentencias.registroAlumno)

ruta.post('/uploadArchivos', sentencias.uploadArchivos, sentencias.MySQL_uploadArchivos)

ruta.post('/registroUsuario', sentencias.registroUsuario)

ruta.post('/enviarComentarios', sentencias.enviarComentarios)

ruta.post('/enviarCorreo', sentencias.enviarCorreo)

ruta.post('/verRegistros', sentencias.verRegistros)

module.exports = ruta
