var UI = require('./UI');

var AsteroidHitsView = function(asteroidHits){

  AsteroidHitsView.prototype.renderAsteroidHits(asteroidHits);

}

AsteroidHitsView.prototype = {

  renderAsteroidHits: function(hits){

    var ul = document.getElementById('timeline_ul');

    var hit = hits[0];
    var timeline_box = document.getElementById('timeline_box');
    
    var timelineDate = document.getElementById('timeline_date'); 
    timelineDate.innerText = hit.date;
    
    var timelineHeadline = document.getElementById('timeline_headline');    
    timelineHeadline.innerText = hit.headline;

    var timelineDetail = document.getElementById('timeline_detail');
    timelineDetail.innerText = hit.detail;

    var timelineImage = document.getElementById('timeline_image');
    timelineImage.src = hit.image;

    hits.forEach(function(hit, index){
        // console.log(hit);
        var li = document.createElement('li');
        li.value = index;

        li.addEventListener('click', function(){
         var index = this.value;
         var hit = hits[index];
         // console.log(li);
         // console.log(hit);
         AsteroidHitsView.prototype.displayHitData(hit);
       });
        ul.appendChild(li);
      });
  },

displayHitData: function(hit){
  var timeline_box = document.getElementById('timeline_box');

  var timelineDate = document.getElementById('timeline_date');    
  timelineDate.innerText = hit.date;

  var timelineHeadline = document.getElementById('timeline_headline');    
  timelineHeadline.innerText = hit.headline;

  var timelineDetail = document.getElementById('timeline_detail');
  timelineDetail.innerText = hit.detail;

  var timelineImage = document.getElementById('timeline_image');
  timelineImage.src = hit.image;
  }
}


module.exports = AsteroidHitsView;