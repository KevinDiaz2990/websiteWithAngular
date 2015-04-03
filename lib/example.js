var db = require('./database.js');

db.findOne('users', {"Username": "kevindiaz3" }, function (result){
	console.log(result);
});
var router = require('./router.js');
router();
//db.insertDatabase('users', {"Username": "dianadiaz4"});