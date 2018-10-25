"use strict"
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var app = require("./app");
var port = 3700;

mongoose.connect('mongodb://localhost:27017/portfolio')
	.then(() => {
		console.log("Conectado a MONGO okas");

		// creacion de servidor
		app.listen(port, () => {
			console.log("Servidor corriendo en localhost:" + port);
		});
	})
	.catch( err => {
		console.log(err)
	});

console.log("index");