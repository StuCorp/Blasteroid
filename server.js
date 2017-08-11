var express = require('express');
var app = express();
var path = require("path");


app.use(require('./controllers/index'));



app.use(express.static('client/build'));

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
