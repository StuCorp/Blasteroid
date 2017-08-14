
var Asteroid = function(options){
  this.name = options.name;
  this.sizeM = options.sizeM;
  this.hazardous = options.hazardous;
  this.arrivalDateString = options.arrivalDateString;
  this.speedKS = options.speedKS;
  this.missDistanceKm = options.missDistanceKm;

//temporary
  this.arrival_date = 1;
  
  this.size = this.calculateSize(this.sizeM);
  this.arrivalDate = new Date(this.arrivalDateString);
  this.speed = parseInt(this.speedKS);
  this.missDistance = this.missDistanceKm/10000000;

  this.xPos = 0;
  this.yPos = 0;
  this.arrived = false;
}


Asteroid.prototype = {

calculateSize: function(sizeM){
  if(sizeM< 100){
    return 10 + (sizeM/10);
  };
  if(sizeM<200){
    return 20 + ((sizeM-100)/10);
  };
  if(sizeM<300){
    return 30 + ((sizeM-200)/10);
  };
  if(sizeM<400){
    return 40 + ((sizeM-300)/10);
  };
  if(sizeM<500){
    return 50 + ((sizeM-400)/10);
  };
  if(sizeM<600){
    return 60 + ((sizeM-500)/10);
  };
  if(sizeM<700){
    return 70 + ((sizeM-600)/10);
  };
  if(sizeM<800){
    return 80 + ((sizeM-700)/10);
  };
  if(sizeM<900){
    return 90 + ((sizeM-800)/10);
  };  
  if(sizeM>900){
    return 100 + (sizeM/100);
  };

}

}

module.exports = Asteroid;