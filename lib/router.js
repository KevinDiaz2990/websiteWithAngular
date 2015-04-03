var doT = require("dot").process({
	global: "_page.render"
	, destination: __dirname + "/render/"
	, path: (__dirname + "/../templates")
});
var render = require('./render');
var qs = require('querystring');
var db = require('./database.js');
var crypto = require('crypto');

module.exports.getSignup = function (request, response){
  response.send(render.hello({username: "", password:"", cpass:"", email:""}));
}

module.exports.getLogin = function (request, response){
response.send(render.login({username:"", password: ""}));
}

module.exports.postLogin = function (request, response){
 var body = '';
 request.on('data', function(data){
 	body += data;
 });
request.end('end');

}
module.exports.postSignup = function (request, response){
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

}

module.exports.getOther = function (request, response){
   
   response.send(render.other_page({Post:""}));
}


