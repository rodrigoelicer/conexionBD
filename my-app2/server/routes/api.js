// Fuente: https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli

const express = require('express');
const router = express.Router();
const path = require('path')

//Add Sequelize as ORM //
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'admin', { //bd,user,pass
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  operatorsAliases: false,
  define: {
    timestamps: false,
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    }
  }
});
// Recuerden que el JSON de conexión se puede dejar en un archivo aparte

//Test de conexión
sequelize.authenticate().then(() => {
  console.log("Conexión establecida");
}).catch(err => {
  console.error("No te puedes conectar: ", err);
});

// Import User Models

const Usuario = sequelize.import('usuarios', require("../models/usuarios"));
const Orden = sequelize.import('ordenes', require("../models/ordenes"));

/* GET api listing. */
router.get('/', (req, res) => {
  Usuario.findAll().then(users => {
    res.status(200).send(users);
  })
});

router.get('/orden', (req, res) => {
  Orden.findAll().then(ordenes => {
    res.status(200).send(ordenes);
  })
});

router.post('/crearOrden', (req, res) => {
  Orden.create({
    idordenes: req.body.id,
    descripcion: req.body.descripcion,
  }).then(function(order) {
    res.json({
      status: 200,
      body: {
        result: "OK"
      }
    });
  }).catch(function(err) {
    console.log(err)
  });
});

module.exports = router;
