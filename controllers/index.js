var express = require('express');
var router = new express.Router(); 
var path = require('path');
var asteroidQuery = require('../client/db/asteroidQuery');
var query = new asteroidQuery();

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
})

router.get('/api/facts', function(req, res) {
  query.allFacts(function(results){
    res.json(results);
  })
});

// Chris amended
router.get('/api/hits', function(req, res) {
  query.allHits(function(results){
    res.json(results);
  })
});


module.exports = router; 