var AsteroidHits = require('../models/AsteroidHits');
var AsteroidHitsView = require('./asteroidHitsView');
var AsteroidFacts = require('../models/AsteroidFacts');
var AsteroidFactsView = require('./asteroidFactsView');


var UI = function() {
//this gets the asteroid hits data from the db collection
//COMMENT OUT THE BLOCK OUT THIS OUT IF YOU WANT THE SITE TO WORK
  var asteroidHits = new AsteroidHits();
  asteroidHits.all(function(results){
    UI.prototype.renderAsteroidHits(results);
  });

  var asteroidFacts = new AsteroidFacts();
  asteroidFacts.all(function(results){
    UI.prototype.renderAsteroidFacts(results);
  });
}

UI.prototype = {
//this fires the asteroid hits data into a separate view where it can be parsed and dynamically added to html
  renderAsteroidHits: function(results){
    var asteroidHitsView = new AsteroidHitsView(results); 
  },

  renderAsteroidFacts: function(results){
    var asteroidFactsView = new AsteroidFactsView(results); 
  },

  timelinePopulate: function() {
// Begin adding Timeline elements
    var timelineBox = document.getElementById('timeline_box');

    var timelineDate = document.getElementById('timeline_date');    
    timelineDate.innerText = asteroidHitsView.timeline_date;

    var timelineHeadline = document.getElementById('timeline_headline');    
    timelineHeadline.innerText = asteroidHitsView.timeline_headline;

    var timelineDetail = document.getElementById('timeline_detail');    
    timelineDetail.innerText = asteroidHitsView.timeline_detail;

    var timelineImage = document.getElementById('timeline_image');
    timelineImage.src = asteroidHitsView.timeline_image;
  },

  factPopulate: function() {
    // Begin adding Fact elements
      var factBox = document.getElementById('fact_box');

      var factHeadline = document.getElementById('fact_headline');    
      factHeadline.innerText = asteroidFactsView.fact_headline;

      var factDetail = document.getElementById('fact_detail');    
      factDetail.innerText = asteroidFactsView.fact_detail;

      var factImage = document.getElementById('fact_image');
      factImage.src = asteroidFactsView.fact_image;
    }


}

module.exports = UI;