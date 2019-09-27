config = require('./config.js');
//var api = require('./api/api.controller');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.set('config',config)
app.listen(port);

console.log('API server started on: ' + port);

app.get("/api/url/:name", (req, res, next) => {
    var name = req.params.name;
    res.send("Coucou " + name + " from env: " +  config.conf.env);
   });