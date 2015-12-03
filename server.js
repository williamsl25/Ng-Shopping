var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var https = require('https').Server(app);

app.use(express.static(__dirname + "/app"))

app.get('/', function(req,response) {
  response.sendFile('app');
});

app.get('/maybe', function(req,res) {
  res.send("<p>what am i doing</p>");
});


http.listen(port);


console.log('WE ARE RUNNING ON PORT:' + port);
