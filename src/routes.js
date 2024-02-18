// É um arquivo para comfigurar as rotas da aplicação rotas essas que irão servir para 
// cada aperação do CRUD e outras que a API possa fazer 

const express = require('express'); // => É um fremework que auxilia na criação de APIs
const router = express.Router(); 

const carroControllers = require('./Controllers/carrosControllers');

module.exports = router;