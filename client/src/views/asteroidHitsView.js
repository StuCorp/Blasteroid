var AsteroidHitsView = function(asteroidFacts){

  AsteroidHitsView.prototype.renderAsteroidHits(asteroidFacts);

}

AsteroidHitsView.prototype = {

//test if it's making it this far
  renderAsteroidHits: function(asteroidFacts){
    console.log(asteroidFacts);
  }

}

module.exports = AsteroidHitsView;