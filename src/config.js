//Configuracion de las variabls de entorno 
const { config } = require('dotenv')

config()

exports.PORT = process.env.PORT || 3000
exports.DB_PORT = process.env.DB_PORT || 3306
exports.DB_HOST = process.env.DB_HOST || '3.94.211.121'
exports.DB_USER = process.env.DB_USER || 'hector'
exports.DB_PASSWORD = process.env.DB_PASSWORD || 'hector123'
exports.DB_DATABASE = process.env.DB_DATABASE || 'becascut'

