
var mongoose = require('mongoose');
var express = require('express');
var routes = require('./routes');

mongoose.connect('mongodb://localhost', function(err){
	if(err) throw err;

	var app = express();
	app.use(express.static(__dirname + '/'));

	routes(app);

	app.listen(3000, function(){
		console.log('now listening on http://localhost:3000');
	})
})