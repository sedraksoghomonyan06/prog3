var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public/index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});


var Bomb = require('./class/class.bomb');
var Xotaker = require('./class/class.xotaker');
var grass = require('./class/class.grass');
var gishatich = require('./class/class.gishatich');