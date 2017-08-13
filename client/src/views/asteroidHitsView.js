var AsteroidHitsView = function(asteroidHits){

  AsteroidHitsView.prototype.renderAsteroidHits(asteroidHits);

}

AsteroidHitsView.prototype = {

//test if it's making it this far
  renderAsteroidHits: function(asteroidHits){
    console.log(asteroidHits);
  }

}

module.exports = AsteroidHitsView;