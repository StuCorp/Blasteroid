var AsteroidFact = require('../asteroidFact');
var assert = require('assert');

describe('AsteroidFact', function() {
  var fact;

  beforeEach(function() {
    fact = new AsteroidFact({
      fact_headline: 'Asteroids stand alone from comets',
      fact_detail: 'There are stark differences between asteroids, meteors and comets'
    });
  });

  it('should have headline', function() {
    assert.equal(fact.headline, 'Asteroids stand alone from comets');
  });

  it('should have detail', function() {
    assert.equal(fact.detail, 'There are stark differences between asteroids, meteors and comets');
  });

});