// Fuente: https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli

const express = require('express');
const router = express.Router();

// Agregar MYSQL
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database : 'test'
});


/* GET api listing. */
router.get('/', (req, res) => {
	var Query = "SELECT * from test.usuarios";
  	connection.query(Query, function(err, rows){
    if(err){
      res.status(400).send("Error");
    }
    else{
      return res.status(200).send(rows);
    }
  	});	
});

module.exports = router;
