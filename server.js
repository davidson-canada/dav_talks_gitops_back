config = require('./config.js');
var cors = require("cors");

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.set('config',config);
app.use(cors());
app.listen(port);

console.log(config.conf.env + ' API server started on: ' + port);

app.get("/api/url/:name", (req, res, next) => {
    var name = req.params.name;

    console.log("J'ai cru voir un micro service par ici ! ==> " + name);

    res.send("Coucou " + name + " from env: " +  config.conf.env);
});