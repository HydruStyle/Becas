const mysql = require('mysql')
const variables = require('../config.js')
    
    const conexion = mysql.createConnection({
        host: variables.DB_HOST,
        user: variables.DB_USER,
        password: variables.DB_PASSWORD,
        database: variables.DB_DATABASE,
        port: variables.DB_PORT,
    });

    conexion.connect(err => {
        if (err) {
            throw err
        } else {
            console.log("Conectado a la base de datos");
        }
    });


module.exports = conexion
