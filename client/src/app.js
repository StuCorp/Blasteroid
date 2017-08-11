var UI = require('./views/ui');
var AsteroidHits = require('./models/asteroidHits');

var app = function() {
  new UI();

  var asteroidHits = new AsteroidHits();
  asteroidHits.all(function(result){
    UI.prototype.render(result);
  });



}

window.addEventListener('load', app);
