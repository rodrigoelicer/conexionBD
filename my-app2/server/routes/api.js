// Fuente: https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli

const express = require('express');
const router = express.Router();
const path = require('path')

//Add Sequelize as ORM //
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'admin',{
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
  operatorsAliases: false,
	define: {
		defaultScope:{
			attributes:{
				exclude: ['createdAt','updatedAt']
			}
		}
	}
});
// Recuerden que el JSON de conexión se puede dejar en un archivo aparte

//Test de conexión
sequelize.authenticate().then(() =>	{
	console.log("Conexión establecida");
}).catch(err => {
	console.error("No te puedes conectar: ", err);
});

// Import User Models

const Usuario = sequelize.import('usuario', require("../models/usuarios"));

/* GET api listing. */
router.get('/', (req, res) => {
  Usuario.findAll().then(users => {
    res.status(200).send(users);
  })
});

module.exports = router;
