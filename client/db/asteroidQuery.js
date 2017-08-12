var MongoClient = require('mongodb').MongoClient;

var AsteroidQuery = function(){
  this.url = "mongodb://localhost:27017/asteroid_info";
};

AsteroidQuery.prototype = {
  allFacts: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collectionFacts = db.collection('asteroid_facts');
      collectionFacts.find().toArray(function(err, result){
        callback(result);
      });
    });
  },

  allHits: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collectionHits = db.collection('asteroid_hits');
      collectionHits.find().toArray(function(err, result){
        callback(result);
      });
    });
  },


}

module.exports = AsteroidQuery; 