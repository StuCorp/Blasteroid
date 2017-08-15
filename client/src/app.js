var UI = require('./views/ui');
var Asteroid = require('./models/asteroid');
var asteroids = [];
var asteroid1 = new Asteroid({
name: "(2006 SM198)", 
sizeM: 127.2198785394, 
hazardous: true, 
arrivalDateString: "2017-08-15", 
speedKS: "11.9744199394", 
missDistanceKm: "43331116"
});

// var AsteroidHits1 = require('./models/asteroidHits');
// // Chris Amend
// var AsteroidFacts = require('./models/asteroidFacts');


var app = function() {



  // var asteroid2 = new Asteroid({
  // name: "(2006 SM198)", 
  // sizeM: 127.2198785394, 
  // hazardous: false, 
  // arrivalDateString: "2017-08-16", 
  // speedKS: "11.9744199394", 
  // missDistanceKm: "43331116"
  // });

  
  // var asteroid3 = new Asteroid({
  // name: "(2017 PD25)", 
  // sizeM: 22.7276732285, 
  // hazardous: false, 
  // arrivalDateString: "2017-08-16", 
  // speedKS: "7.8670728204", 
  // missDistanceKm: "697049.25"
  // });

  
  // var asteroid4 = new Asteroid({
  // name: "(2006 NL)", 
  // sizeM: 265.8, 
  // hazardous: false, 
  // arrivalDateString: "2017-08-16", 
  // speedKS: "14.3839019244", 
  // missDistanceKm: "57806520"
  // });

  
  // var asteroid5 = new Asteroid({
  // name: "(2010 VB)", 
  // sizeM: 5020.1629919443, 
  // hazardous: false, 
  // arrivalDateString: "2017-08-15", 
  // speedKS: "7.1173586476", 
  // missDistanceKm: "31285308"
  // });



  // asteroids.push(asteroid1);
  // asteroids.push(asteroid2);
  // asteroids.push(asteroid3);
  // asteroids.push(asteroid4);
  // asteroids.push(asteroid5);


  // new UI(asteroids);
var urlFirstPart = "https://api.nasa.gov/neo/rest/v1/feed?start_date=";
var today = new Date();
var startDate = today.toJSON().slice(0,10);
var endDate = new Date();
endDate.setFullYear(endDate.getFullYear() + 1);
endDate = endDate.toJSON().slice(0,10);

debugger;

var urlSecondPart = "=END_DATE&api_key";
var apiKey = "NiOr5B0PxAfP318MbGo2A2QD6mRvQP2HMg9RtBh6"; 


  var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-08-18&2018-08-18=END_DATE&api_key=NiOr5B0PxAfP318MbGo2A2QD6mRvQP2HMg9RtBh6";

    makeRequest(url, requestComplete);
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
    // url =    asteroids.links.next;
  //   while(numberOfWeeks >52) {
  //   makeRequest(url, requestComplete);
  // } else {
  //   new UI(asteroidsArray);
  // }
    // debugger;
    // console.log(asteroids);

    var asteroidsArray = [];
    addToAsteroidsArray(asteroids, "2017-08-18", asteroidsArray); // copy this line!
    addToAsteroidsArray(asteroids, "2017-08-23", asteroidsArray);
    addToAsteroidsArray(asteroids, "2017-08-22", asteroidsArray);
    addToAsteroidsArray(asteroids, "2017-08-25", asteroidsArray);
    addToAsteroidsArray(asteroids, "2017-08-24", asteroidsArray);
    addToAsteroidsArray(asteroids, "2017-08-21", asteroidsArray);
    addToAsteroidsArray(asteroids, "2017-08-20", asteroidsArray);
    // debugger;
    asteroidsArray.push(asteroid1);
    console.log(asteroidsArray);
  new UI(asteroidsArray);

  };

  var addToAsteroidsArray = function(asteroids, date, asteroidsArray) {
    for(var data of asteroids.near_earth_objects[date]){
      var newAsteroid = new Asteroid({
      name: data.name, 
      sizeM: data.estimated_diameter.meters.estimated_diameter_min, 
      hazardous: data.is_potentially_hazardous_asteroid, 
      arrivalDateString: data.close_approach_data[0].close_approach_date, 
      speedKS: data.close_approach_data[0].relative_velocity.kilometers_per_second, 
      missDistanceKm: data.close_approach_data[0].miss_distance.kilometers
      });
      asteroidsArray.push(newAsteroid); 



      // var myObject = {};
      // myObject.name = data.name;
      // myObject.diameter_metres = data.estimated_diameter.meters.estimated_diameter_min;
      // myObject.potentiall_hazardous = data.is_potentially_hazardous_asteroid;
      // myObject.close_approach_date = data.close_approach_data[0].close_approach_date;
      // myObject.kilometers_per_second = data.close_approach_data[0].relative_velocity.kilometers_per_second;
      // myObject.miss_distance_kilometers = data.close_approach_data[0].miss_distance.kilometers;
      // asteroidsArray.push(myObject); 
      // debugger;
    }
  };

  // var asteroid1 = new Asteroid({
  // name: "(2006 SM198)", 
  // sizeM: 127.2198785394, 
  // hazardous: true, 
  // arrivalDateString: "2017-08-15", 
  // speedKS: "11.9744199394", 
  // missDistanceKm: "43331116"
  // });



window.addEventListener('load', app);

