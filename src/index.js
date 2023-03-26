//importando dependencias
const variables = require('./config.js')
const app = require('./app.js')

//inciciando servidor
app.listen(variables.PORT)
console.log(`Conexion establecida en http://localhost:${variables.PORT}`)


