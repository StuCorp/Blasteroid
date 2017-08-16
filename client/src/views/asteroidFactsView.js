var UI = require('./UI');

var AsteroidFactsView = function(asteroidFacts){

  AsteroidFactsView.prototype.renderAsteroidFacts(asteroidFacts);

}

AsteroidFactsView.prototype = {

  renderAsteroidFacts: function(facts){
    // console.log(asteroidFacts);
    var count = 0;
    var fact = facts[count];

    var fact_box = document.getElementById('fact_box');
    
    var factHeadline = document.getElementById('fact_headline');
    factHeadline.innerText = fact.headline;

    var factDetail = document.getElementById('fact_detail');    
    factDetail.innerText = fact.detail;

    var factImage = document.getElementById('fact_image');
    factImage.src = fact.image;

    var factArrow = document.getElementById('fact_arrow');
    factArrow.addEventListener('click', function(){
      count++ ;
      if (count === facts.length){
        count = 0;
      }
      var fact = facts[count];
      var fact_box = document.getElementById('fact_box');
    
      var factHeadline = document.getElementById('fact_headline');
      factHeadline.innerText = fact.headline;

      var factDetail = document.getElementById('fact_detail'); 
      factDetail.innerText = fact.detail;

      var factImage = document.getElementById('fact_image');
      factImage.src = fact.image;
    });


  }

}

module.exports = AsteroidFactsView;