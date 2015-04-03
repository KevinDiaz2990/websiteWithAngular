var http = require('http');

var express = require('express');
var app = express();

var router = require('./router.js');
app.get('/signup', function (request, response){
	router.getSignup(request, response);
});




app.get('/login', function (request, response){
	router.getLogin(request, response);
});

app.post('/login', function (request,response){
 router.postLogin(request, response);
});


app.post('/signup', function (request, response){
 router.postSignup(request, response);
	
});

app.get('/otherpage', function (request, response){
	router.getOther(request, response);
});

app.get('*', function (request, response){
	response.send("Link not found");
});

var stream = http.createServer(app);

stream.listen(process.argv[2]);