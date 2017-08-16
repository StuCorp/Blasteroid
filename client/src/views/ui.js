var AsteroidHits = require('../models/AsteroidHits');
var AsteroidHitsView = require('./asteroidHitsView');
var AsteroidFacts = require('../models/AsteroidFacts');
var AsteroidFactsView = require('./asteroidFactsView');
var MainCanvasView = require('./mainCanvasView');



var UI = function(asteroids) {

var asteroidHits = new AsteroidHits();
asteroidHits.all(function(results){
  UI.prototype.renderAsteroidHits(results);
});

var asteroidFacts = new AsteroidFacts();
asteroidFacts.all(function(results){
  UI.prototype.renderAsteroidFacts(results);
});

UI.prototype.renderCanvas(asteroids);

}

UI.prototype = {
renderAsteroidHits: function(results){
  var asteroidHitsView = new AsteroidHitsView(results); 
},

renderAsteroidFacts: function(results){
  var asteroidFactsView = new AsteroidFactsView(results); 
},


  renderCanvas: function(results){
    var mainCanvasView = new MainCanvasView(results); 
  }

}

module.exports = UI;