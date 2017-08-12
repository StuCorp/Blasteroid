
var AsteroidHit = require('./asteroidHit');
var AsteroidHits = function() {

}


AsteroidHits.prototype = {

    makeRequest: function(url, callback){
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.addEventListener('load', callback);
      request.send();
    },

    all: function(callback){
      this.makeRequest("http://localhost:3000/api/facts", function(){
        if(this.status !==200) return;
        var jsonString = this.responseText; 
        var results = JSON.parse(jsonString);
        var hits = AsteroidHits.prototype.populateHits(results);
        callback(hits);
      });
    },

    populateHits: function(results){
      var hits = [];
      for(var result of results){
        var hits = new AsteroidHit(result);
        hits.push(hit)
      }
      return hits;
    },


};

module.exports = AsteroidHits;

