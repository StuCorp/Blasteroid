var MongoClient = require('mongodb').MongoClient;

var AsteroidQuery = function(){
  this.url = "mongodb://localhost:27017/asteroid_info";
};

AsteroidQuery.prototype = {
  all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('asteroid_hits');
      collection.find().toArray(function(err, result){
        callback(result);
      });
    });
  },


}

module.exports = AsteroidQuery; 