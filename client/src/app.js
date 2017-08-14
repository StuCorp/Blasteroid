var UI = require('./views/ui');
var Asteroid = require('./models/asteroid');
var asteroids = [];

// var AsteroidHits1 = require('./models/asteroidHits');
// // Chris Amend
// var AsteroidFacts = require('./models/asteroidFacts');


var app = function() {



  var asteroid1 = new Asteroid({
  name: "(2006 SM198)", 
  sizeM: 127.2198785394, 
  hazardous: true, 
  arrivalDateString: "2017-08-15", 
  speedKS: "11.9744199394", 
  missDistanceKm: "43331116"
  });

  var asteroid2 = new Asteroid({
  name: "(2006 SM198)", 
  sizeM: 127.2198785394, 
  hazardous: false, 
  arrivalDateString: "2017-08-16", 
  speedKS: "11.9744199394", 
  missDistanceKm: "43331116"
  });

  asteroids.push(asteroid1);
  asteroids.push(asteroid2);


  new UI(asteroids);

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

