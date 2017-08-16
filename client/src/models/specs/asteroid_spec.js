var Asteroid = require('../asteroid');
var assert = require('assert');

describe('Asteroid', function() {
  var asteroid;

  beforeEach(function() {
    asteroid = new Asteroid({
      name: "(2006 SM198)", 
      sizeM: 127.2198785394, 
      hazardous: true, 
      arrivalDateString: "2017-08-15", 
      speedKS: "11.9744199394", 
      missDistanceKm: "43331116"
    });
  });

  it('should have name', function() {
    assert.equal(asteroid.name, '(2006 SM198)');
  });

  it('should have size', function() {
    assert.equal(asteroid.sizeM, 127.2198785394);
  });

  it('should have hazardous rating', function() {
    assert.equal(asteroid.hazardous, true);
  });

  it('should have arrival date', function(){
    assert.equal(asteroid.arrivalDateString, '2017-08-15');
  });

  it('should have speed', function(){
    assert.equal(asteroid.speedKS, '11.9744199394');
  });

  it('should have miss distance', function(){
    assert.equal(asteroid.missDistanceKm, '43331116');
  });

});



