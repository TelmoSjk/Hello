const express = require('express');
const app = express();
const path = require('path');
//const { Sequelize } = require('sequelize/types');
const router = express.Router();


//Criando um objeto servidor
//*********************************************************************************************************
  app.get('/', (req, res) => {
  res.write('Hello World, Telmo aqui..!'); //Enviando a resposta 
  res.end(); //Fim da resposta
 })
.listen(3000); 
 console.log('Serviço em execução no endereço localhost:8080');
//**********************************************************************************************************

// Fazendo a conexão com o DB usando o sequelize
/* 
const sequelize = new Sequelize('webpagehello', 'root', '123456',{
  host: "localhost",
  dialect: 'mysql'
})*/