const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const RouterCadastroUsuarios = require('../routes/SignUpApi');
const expressPort = 5000;

const expressApp = express();

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));

// Configuração para servir arquivos estáticos (HTML, CSS, etc.)
expressApp.use('/public', express.static(path.join(__dirname, 'public')));

// Configuração da rota de cadastro de usuários
expressApp.use('/api/signup', RouterCadastroUsuarios);

expressApp.listen(expressPort, () => {
  console.log(`Servidor rodando em http://localhost:${expressPort}`);
});
