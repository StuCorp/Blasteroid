var AsteroidHits = require('../models/AsteroidHits');
var AsteroidHitsView = require('./asteroidHitsView');

var UI = function() {

//this gets the asteroid hits data from the db collection
//COMMENT OUT THE BLOCK OUT THIS OUT IF YOU WANT THE SITE TO WORK
  // var asteroidHits = new AsteroidHits();
  // asteroidHits.all(function(results){
  //   UI.prototype.renderAsteroidHits(results);
  // });



}


UI.prototype = {

//this fires the asteroid hits data into a separate view where it can be parsed and dynamically added to html
renderAsteroidHits: function(results){
  var asteroidHitsView = new AsteroidHitsView(results); 
}


 }

 module.exports = UI;