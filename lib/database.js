var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

  var url = 'mongodb://localhost:27017/application';


 module.exports.insertDatabase =  function insertDatabase ( collection,documents){
 	Object.keys(documents).forEach(function(key, index){
 		console.log(this[key])


 	}, documents);
  	MongoClient.connect(url, function(err, db){
  		assert.equal(null, err);
  		console.log("Connected to the database");
  		insertDocument(db, collection ,documents ,function(){
  			db.close();
  		});
  	});
  }

  module.exports.findOne = function (collection, documents){

  	MongoClient.connect(url, function(err, db) {

  		if(err) throw err;
      
     
      console.log(collection);
      getOneDoc(db, collection, documents, function(result) {
     
        console.log(result);
        db.close();
       
        });
   
        
  	});

  }

  var insertDocument = function (db, collection ,documents, callback){
  	var collection = db.collection(collection);

  	collection.insert(documents, function(err, result){
  		assert.equal(err, null);
  		console.log("Inserted the document");
  		callback(result);
  	});


  }


  var getOneDoc = function(db, collection, documents, callback){

  	var collection = db.collection(collection);

  	collection.findOne(documents, function(err, result){
  		if(err) throw err;
  		
  		callback(result);

  	});



  }