const mysql = require('mysql');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('ShopNest', 'root', '82937061',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
sequelize
 .authenticate()
 .then(() =>{
    console.log('conexão bem-sucedida ao banco "ShopNest".');
 }).catch((err) =>{
    console.error('Erro ao conectar ao banco "ShopNest".')
 })

 module.exports = {
    Sequelize: Sequelize, 
    sequelize: sequelize
 };