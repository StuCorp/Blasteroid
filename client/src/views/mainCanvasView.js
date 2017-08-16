//packages
var _ = require('lodash');


// var asteroidY;
// var asteroidX;


//arrays
var asteroidsArray;
var asteroidsToDraw;

//locations
var earthY;
var earthX; 

var earthDimension;

//info box - deprecated 
var infoBoxClicked;
var infoBoxPosX;
var infoBoxPosY;
var infoBoxWidth;
var infoBoxHeight;
var infoOBoxOriginalHeight;

//images
var earth = new Image(); 
var moon = new Image();
var asteroidImage = new Image();

//controls/time
var dayLength;
var starTimer; 
var paused;
var today; 
var stableToday;
var bigImpactDate; 
var count;
var date;
var asteroidSpeedMultiplier;


//Text size
var pausedText;
var detailTextSize;
var dateTextSize;
var impactTextSize;

//sounds
var pauseSound;
var unPauseSound;
var hazardousSound;
var asteroidSound;
var easterEggSound;
var soundChange;

//images
var asteroidImages;
var wrestlerImages;

var earthShadowIterator;
var i; 




var MainCanvasView = function(asteroids) {
  this.asteroids = asteroids;
  init(asteroids);
}

var init = function(asteroids){
  earth.src = "./images/Earth.png"; 
  asteroidImage.src = "./images/Asteroid.png"; 
  moon.src = "./images/Moon.png";
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');


  asteroidsArray = asteroids;
  asteroidsToDraw = [];
  earthY = canvas.height/3;
  earthX = canvas.width/6;
  asteroidX = canvas.width;
  asteroidY =  130;
  count = 0;
  date = 1;
  bigImpactDate = new Date(2880, 03, 16, 12, 30, 0);
  stableToday = new Date();
  dateTextSize = canvas.height/12;
  impactTextSize = canvas.height/25;
  detailTextSize = canvas.height/28;
  starTimer =0;
  earthShadowIterator = 0; 
  earthDimension = canvas.height/4;
  dayLength =400;
  paused = false;
  pausedText = canvas.width/10;
  asteroidSpeedMultiplier = 0.75;
  
  //sounds
  pauseSound = new Audio('./sounds/pause.wav');
  unPauseSound = new Audio('./sounds/unpause.wav');
  hazardousSound = new Audio('./sounds/evilAsteroid.wav');
  asteroidSound = new Audio('./sounds/asteroidAppear.wav');
  easterEggSound = new Audio('./sounds/easteregg.mp3')
  soundChange = new Audio('./sounds/soundChange.wav')


  //images
  asteroidImages = ["./images/Asteroid.png", "./images/Asteroid2.png", "./images/Asteroid3.png", "./images/Asteroid4.png", "./images/Asteroid5.png","./images/Asteroid6.png", "./images/Asteroid7.png", "./images/Asteroid8.png"];
  wrestlerImages = ["./images/facecowboy.png", "./images/facecry.png", "./images/facedevil.png", "./images/faceheart.png", "./images/facelaugh.png","./images/facemoney.png", "./images/facemoon.png", "./images/facevom.png"];


  i =0;

  infoBoxPosX = canvas.width - (canvas.width/3);
  infoBoxPosY = 0; 
  infoBoxWidth = canvas.width/3;
  infoBoxHeight = canvas.height/5;
  infoOBoxOriginalHeight = infoBoxHeight;
  infoBoxClicked = false; 



  window.addEventListener('keydown', function(event){
    if(event.code === "Enter"){
      // debugger;
      if (paused===false){ 
        paused = true;
        pauseSound.play();
      } else{
        paused = false; 
        unPauseSound.play();
      }
    }
    if(event.code === "ArrowRight"){
      soundChange.play();
      dayLength += 20; 
    }
    if(event.code === "ArrowLeft"){
      soundChange.play();
      dayLength -=   20;
    }
    if(event.keyCode === 69){
      asteroidImages = wrestlerImages;
      easterEggSound.play();
    }
  });

  canvas.addEventListener('click', function(event){
    asteroidsToDraw.forEach(function(asteroid){
      if(event.layerY > asteroid.yPos && event.layerY < asteroid.yPos + asteroid.size && asteroid.xPos > 0){ 
        populateInfoBox(context, canvas, asteroid);
      }
    }); 
  });


  window.requestAnimationFrame(draw); 
}


var draw = function(){ 

  if(!paused){

   var canvas = document.getElementById('main-canvas');
   var context = canvas.getContext('2d');
   context.clearRect(0,0, canvas.width,canvas.height);
   context.fillStyle = 'black';
   context.fillRect(0,0, canvas.width,canvas.height);
   today = new Date(); 


   drawDate(context, canvas);
   drawDoomsdayClock(context, canvas);

   count++;

   if(count> dayLength){
     date++;
     stableToday.setDate(stableToday.getDate() + 1);

     count=0;
   }
   drawEarth(context, canvas);


   asteroidsArray.forEach(function(asteroid){
    if(asteroid.arrivalDate[asteroid.arrivalDate.length - 1] === 'Z'){
      asteroid.arrivalDate = new Date(asteroid.arrivalDate);
    }

    if(asteroid.arrivalDate.getFullYear() === stableToday.getFullYear() && 
      asteroid.arrivalDate.getMonth() === stableToday.getMonth() && 
      asteroid.arrivalDate.getDate() === stableToday.getDate() && asteroid.arrived === false){

     asteroid.xPos = canvas.width + _.random(400, 700);
   var aboveOrBelowEarth = _.random(0,1) === 0 ? -1 : 1;
   asteroid.yPos = (earthY + earthDimension/2) + ((((canvas.height/ 30) * asteroid.missDistance) + earthDimension/2) * aboveOrBelowEarth) + asteroid.size/2;
   asteroid.image = new Image();
   asteroid.image.src = asteroidImages[_.random(0, asteroidImages.length-1)]; 
   asteroid.arrived = true;
   asteroidsToDraw.push(asteroid);
 }
});


   if(asteroidsToDraw.length> 0) {
    asteroidsToDraw.forEach(function(asteroid){
      var positionLastFrame = asteroid.xPos;
      asteroid.xPos -= asteroid.speed * asteroidSpeedMultiplier;
      if(asteroid.xPos < canvas.width && positionLastFrame > canvas.width){
       if(asteroid.hazardous){
        hazardousSound.play();
      }else{      
        asteroidSound.play();
      }
    }

  });
  };

  drawAsteroids(context, canvas, asteroidsToDraw);
  drawStars(context);

    // Moon
    //aided by http://jsfiddle.net/wY8d7/1/ 
    context.save()           
        // set origin to earth center
        context.translate(earthX + (earthDimension/2), earthY + (earthDimension/2));
        // rotate + move along x
        context.rotate(i / (dayLength/7));
        context.translate(earthDimension/1.5, 0);
        // draw planet
        context.drawImage(moon, 0, 0, 10, 10);
        context.restore();
        i++;


        drawDaySpeed(context, canvas);

//end of paused if statement
}

if(paused){
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');
  drawPaused(context, canvas);


}

window.requestAnimationFrame(draw); 

} 
  

var drawEarth = function(context, canvas){
  var earthShadow = 18; 
  if(earthShadowIterator> 60) {
    earthShadowIterator =0;
    earthShadow = 16; 
  }

  context.shadowOffsetX = 0;
  context.shadowColor = 'white';
  context.shadowBlur = earthShadow;
  context.drawImage(earth,  earthX, earthY, earthDimension, earthDimension);
  context.shadowColor = 'rgba(0,0,0,0)';

  earthShadowIterator++; 


};



var drawAsteroids = function(context, canvas, asteroidsToDraw){
 if(asteroidsToDraw.length > 0){
  asteroidsToDraw.forEach(function(asteroid){

    if(asteroid.hazardous === true){
      context.shadowColor = 'red'
      context.shadowBlur = 60;
      context.shadowOffsetX = 0;
    } else{
     context.shadowColor = 'rgb(' + _.random(0, 255) + ',' + _.random(0, 255) + ', ' + _.random(0, 255) + ')'; 
     context.shadowBlur = 10;
     context.shadowOffsetX = 5;
   }

   context.drawImage(asteroid.image,  asteroid.xPos, asteroid.yPos, asteroid.size, asteroid.size);
   context.shadowColor = 'rgba(0, 0, 0, 0)'; 
   if(asteroid.hazardous===true){
    drawWarning(context);
  }
});
};


};

var drawWarning = function(context){


};


var drawStars = function(context){
 var canvas = document.getElementById('main-canvas');


 var starX = Math.random() * (canvas.width - 0) + 0;
 var starY = Math.random() * (canvas.height - 0) + 0;

 context.shadowColor = 'gold'
 context.shadowBlur = 60;
 context.shadowOffsetX = 0;
 context.fillRect(starX, starY, 2, 2);
 context.shadowColor = 'rgba(0, 0, 0, 0)'; 

};

var drawDate = function(context, canvas){
  context.fillStyle = '#8dd9f1'; 
  context.shadowColor = 'aqua'
  context.shadowBlur = 100;
  context.shadowOffsetX = 0;
  context.font = dateTextSize + 'px Saira';
  context.fillText("Day " + date + ": " + stableToday.toDateString(), canvas.width/2 - (canvas.width/8), 50 );
  context.shadowColor = 'rgba(0, 0, 0, 0)'; 
}

var drawDoomsdayClock = function(context, canvas){
  var doomClockXpos = 20;
  var doomClockYpos = canvas.height - (detailTextSize * 2) ; 
  context.fillStyle = '#FE3801';
  context.font = impactTextSize + 'px Saira';
  context.fillText("Count down to extinction-level impact:", doomClockXpos, doomClockYpos);
  context.fillText( (bigImpactDate - today)/1000 , doomClockXpos, doomClockYpos + 20);
}

var drawPaused = function(context, canvas){
 context.fillStyle = 'rgba(254,56,1,0.1)';
 context.font = pausedText + 'px Saira';
 context.fillText("PAUSED", canvas.width/2 - (pausedText *2), canvas.height/2 + (pausedText/2));
} 

var drawDaySpeed = function(context, canvas){
  context.fillStyle = '#0483F3';
  context.font = impactTextSize + 'px Saira';
  context.fillText("Day length: " + dayLength, canvas.width - canvas.width/8, canvas.height - (detailTextSize *2));
}

var populateInfoBox = function(context, canvas, asteroid){
  var detailsBoxXpos = 1000;


  context.fillStyle = 'black';
  context.fillRect(detailsBoxXpos, canvas.height - (detailTextSize * 7), 300, 300);


  context.fillStyle = 'white';
  context.font = detailTextSize + 'px Saira';

  context.fillText("Name:  " + asteroid.name, detailsBoxXpos, canvas.height - (detailTextSize *6) );
  context.fillText("Size:  " + Math.round(asteroid.sizeM, -2) + '(m)', 1000, canvas.height - (detailTextSize * 5));
  context.fillText("Harzardous:  " + asteroid.hazardous, detailsBoxXpos, canvas.height - (detailTextSize *4));
  context.fillText("Date of arrival:  " + asteroid.arrivalDateString, detailsBoxXpos, canvas.height - (detailTextSize *3));
  context.fillText("Speed:  " + Math.round(asteroid.speedKS) + '(km/s)', detailsBoxXpos, canvas.height - (detailTextSize *2));
  context.fillText("Will miss earth by:  " + asteroid.missDistanceKm + '(km)', detailsBoxXpos, canvas.height - detailTextSize);
};


module.exports = MainCanvasView;