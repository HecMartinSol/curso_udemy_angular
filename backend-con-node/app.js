'use strict'

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// ARCHIVOS DE RUTAS


// MIDDLEWARES: capa que se ejecuta antes de ejecutar un controlador en cuestión

	// esto hace que cualquier tipo de dato que nos llegue por POST lo haga urlencode
	app.use(bodyParser.urlencoded({extended:false})); 
	// cualquier tipo de peticion lo convierte a JSON
	app.use(bodyParser.json());

// CORS

//RUTAS
	app.get("/", (req,res) => {
		res.status(200).send(
			"<h1>Página de inicio</h1>"
		);
	});
	app.get("/test", (req,res) => {
		res.status(200).send({
			message: "Hola mundo desde mi api de NODEJS"
		});
	});

//EXPORTAR
	module.exports = app;