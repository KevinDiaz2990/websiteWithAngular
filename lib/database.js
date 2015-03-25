var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

  var url = 'mongodb://localhost:27017/application';


 module.exports.insertDatabase =  function insertDatabase (collection){
 	Object.keys(collection).forEach(function(key, index){
 		console.log(this[key]);


 	}, collection);
  	MongoClient.connect(url, function(err, db){
  		assert.equal(null, err);
  		console.log("Connected to the database");
  		insertDocument(db, collection ,function(){
  			db.close();
  		});
  	});
  }



  var insertDocument = function (db, documents, callback){
  	var collection = db.collection('users');

  	collection.insert(documents, function(err, result){
  		assert.equal(err, null);
  		console.log("Inserted the document");
  		callback(result);
  	});


  }