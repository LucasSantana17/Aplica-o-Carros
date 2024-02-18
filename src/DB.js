const mysql = require('mysql');

const conection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conection.connect((error) => {
    if (error) throw error;
    console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`)  
});

module.exports = conection;