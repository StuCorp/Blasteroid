var AsteroidFactsView = function(asteroidFacts){

  AsteroidFactsView.prototype.renderAsteroidFacts(asteroidFacts);

}

AsteroidFactsView.prototype = {

//test if it's making it this far
  renderAsteroidFacts: function(asteroidFacts){
    console.log(asteroidFacts);
  }

}

module.exports = AsteroidFactsView;