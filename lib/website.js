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
var crypto = require('crypto');
app.get('/signup', function (request, response){
	response.send(render.hello({username: "", password:"", cpass:"", email:""}));
});




app.get('/', function (request, response){
	response.send(render.login({username:"", password: ""}));
});

app.post('/', function (request,response){
 var body = '';
 request.on('data', function(data){
 	body += data;
 });
request.end('end');
});


app.post('/signup', function (request, response){
 var body = '';
	request.on('data', function (data){
		body += data;
	});
	request.on('end', function(){
		var post = qs.parse(body);
		console.log(post);
	 	if(post['Username'] == '' || post['Email'] == '' || post['Password'] == ''){
	 			console.log('Empty fields need to be filled');
	 			response.redirect('/signup');
	 	}
				
		else if(post['CPassword'] != post['Password']){
				console.log('Doesn\'t match');
				response.redirect('/signup');
		}		
       	else{
       	var pass = crypto.createHash('md5').update(post['Password']).digest('hex');
       	var docToInsert = {"Username":post['Username'],         
       					   "Email": post['Email'],
       					   "Password": pass
       	                   };	
		db.insertDatabase('users' , docToInsert);
		response.redirect('/otherpage');
		}
	});
	
});

app.get('/otherpage', function (request, response){
	response.send(render.other_page({Post:""}));
});

app.get('*', function (request, response){
	response.send("Link not found");
});

var stream = http.createServer(app);

stream.listen(process.argv[2]);