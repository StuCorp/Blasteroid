var express = require('express');
var router = new express.Router(); 
var path = require('path');


router.get("/", function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
})

router.get('/api/facts', function(req, res){
  
})

module.exports = router; 