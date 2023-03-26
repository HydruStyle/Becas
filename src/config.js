//Configuracion de las variabls de entorno 
const { config } = require('dotenv')

config()

exports.PORT = process.env.PORT || 3000
exports.DB_PORT = process.env.DB_PORT || 3306
exports.DB_HOST = process.env.DB_HOST || 'localhost'
exports.DB_USER = process.env.DB_USER || 'root'
exports.DB_PASSWORD = process.env.DB_PASSWORD || 'Hydrustyle'
exports.DB_DATABASE = process.env.DB_DATABASE || 'becascut'

