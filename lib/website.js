var http = require('http');
var doT = require("dot").process({
	global: "_page.render"
	, destination: __dirname + "/render/"
	, path: (__dirname + "/../templates")
});
var express = require('express');
var app = express();
var render = require('./render');
var qs = require('querystring');
var db = require('./database.js');
app.get('/', function (request, response){
	response.send(render.hello({from: "", to:"", number:"", email:""}));
});
var body;
app.post('/', function (request, response){
	body = '';
	request.on('data', function (data){
		body += data;
	});
	request.on('end', function(){
		var post = qs.parse(body);
		console.log(post);
		if(isNaN(post['Number'])){
			console.log("Not a number");
			response.redirect('/');
		}
		else{
		db.insertDatabase(post);
		response.redirect('/otherpage');
	}
	});
	
});
app.get('/otherpage', function (request, response){
	post = qs.parse(body);
	response.send("Hello World \n");
});

var stream = http.createServer(app);

stream.listen(8000);