var AsteroidHit = require('../asteroidHit');
var assert = require('assert');

describe('AsteroidHit', function() {
  var hit;

  beforeEach(function() {
    hit = new AsteroidHit({
      timeline_headline: 'Chixculub Revelation',
      timeline_date: '1990',
      timeline_detail: 'The Chixculub impact crater in Mexico, now buried deep below ground, is finally identified and tied to the impact that killed the dinosaurs.'
    });
  });

  it('should have headline', function() {
    assert.equal(hit.headline, 'Chixculub Revelation');
  });

  it('should have date', function() {
    assert.equal(hit.date, '1990');
  });

  it('should have detail', function() {
    assert.equal(hit.detail, 'The Chixculub impact crater in Mexico, now buried deep below ground, is finally identified and tied to the impact that killed the dinosaurs.');
  });

});