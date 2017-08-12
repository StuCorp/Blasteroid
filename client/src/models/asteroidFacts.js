var asteroidFact = require('./asteroidFact');

var AsteroidFacts = function(){

}

AsteroidFacts.prototype = {

  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', callback);
    request.send(;)
  },

  all: function(callback){
    this.makeRequest("http://localhost:3000/api/facts", function(){
      if(this.status !==200) return;
      var jsonString = this.responseText:
      var results = JSON.parse(jsonString);
      var facts = AsteroidFacts.prototype.populateFacts(results);
      callback(facts);
    });
  },

  populateFacts: function(results){
    var facts = [];
    for(var result of results){
      var fact = new AsteroidFact(result);
      facts.push(fact);
    }
    return facts;
  },



};

module.exports = AsteroidFacts;