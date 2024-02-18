// trazer todas as dependencias necessarias para dentro do projeto 

require('dotenv').config({path:'variaves.env'}); // dotenv = dependencia para ler o arquivo variaves.env
                                                 // e em seguida o nome do arquivo 
 const express = require('express'); // Fremework 
 const cors = require('cors');  // Acessos a recursos de outros sites com dominios diferentes 
 const bodyParser = require('body-parser');
 

 const router = require('./routes')
 const server = express();
 server.use(cors());
 server.use(bodyParser.urlencoded({extended:false}));

 server.use('/api', router);

 server.listen(process.env.PORT, () =>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
 });