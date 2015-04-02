var db = require('./database.js');

db.findOne('users', {"Username": "kevindiaz3" }, function (result){
	console.log(result);
});
//db.insertDatabase('users', {"Username": "dianadiaz4"});