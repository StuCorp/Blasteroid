var MongoClient = require('mongodb').MongoClient;

var AsteroidQuery = function(){
  this.url = "mongodb://localhost:27017/asteroids";
};

AsteroidQuery.prototype = {
  allFacts: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collectionFacts = db.collection('facts');
      collectionFacts.find().toArray(function(err, result){
        callback(result);
      });
    });
  },

  allHits: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collectionHits = db.collection('timeline');
      collectionHits.find().toArray(function(err, result){
        callback(result);
      });
    });
  },


}

module.exports = AsteroidQuery; 