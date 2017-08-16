var UI = require('./views/ui');
var Asteroid = require('./models/asteroid');
var asteroidsArray = [];
var url;
var numberOfWeeks = 52;
var currentWeek = 0;
var today;


var app = function() {

//url building
var urlFirstPart = "https://api.nasa.gov/neo/rest/v1/feed?start_date=";
today = new Date();
today = today.toJSON().slice(0,10);
var endDate = new Date();
endDate.setFullYear(endDate.getFullYear() + 1);
endDate = endDate.toJSON().slice(0,10);
var urlSecondPart = "=END_DATE&api_key=";
var apiKey = "NiOr5B0PxAfP318MbGo2A2QD6mRvQP2HMg9RtBh6"; 
var url = urlFirstPart + today + "&" + endDate + urlSecondPart + apiKey;

//check for today's cached asteroid data
if(localStorage.getItem(today) !== null){
  var storedReturn = localStorage.getItem(today);
  var asteroidsObjects = JSON.parse(storedReturn);
  asteroidsObjects.pop();
  new UI(asteroidsObjects);
} else{
  makeRequest(url, requestComplete);
}
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var asteroids = JSON.parse(jsonString);

    //here set the next url
    url = asteroids.links.next;

    var asteroidDays = asteroids.near_earth_objects;
    var asteroidDaysKeys = Object.keys(asteroidDays);
    asteroidDaysKeys.forEach(function(key){
      addToAsteroidsArray(asteroidDays[key]);
    });

    if(currentWeek < numberOfWeeks) {
      makeRequest(url, requestComplete);
    } else {
      localStorage.setItem(today, JSON.stringify(asteroidsArray));
      new UI(asteroidsArray);
    }
    currentWeek++;
  };

  var addToAsteroidsArray = function(asteroidDate) {
    asteroidDate.forEach(function(asteroid){
      var newAsteroid = new Asteroid({
        name: asteroid.name, 
        sizeM: asteroid.estimated_diameter.meters.estimated_diameter_min, 
        hazardous: asteroid.is_potentially_hazardous_asteroid, 
        arrivalDateString: asteroid.close_approach_data[0].close_approach_date, 
        speedKS: asteroid.close_approach_data[0].relative_velocity.kilometers_per_second, 
        missDistanceKm: asteroid.close_approach_data[0].miss_distance.kilometers
      });
      asteroidsArray.push(newAsteroid);
    });
  };


  window.addEventListener('load', app);
