var db = require('./database.js');

db.findOne('users', {"Username": "kevindiaz3" }, function (result){
	console.log(result);
});
