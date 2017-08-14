var UI = require('./views/ui');
// var AsteroidHits1 = require('./models/asteroidHits');
// // Chris Amend
// var AsteroidFacts = require('./models/asteroidFacts');

var app = function() {
  new UI();

//   var asteroidHits = new AsteroidHits1();
//   asteroidHits.all(function(result){
//     UI.prototype.render(result);
//   });

// // Chris amend
//   var asteroidFacts = new AsteroidFacts();
//   asteroidFacts.all(function(result){
//     UI.prototype.render(result);
//   });


}

window.addEventListener('load', app);

