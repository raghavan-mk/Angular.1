//web-server.js

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var rootPath = path.normalize(__dirname+"/../");

app.use(express.static(rootPath+"/app"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var events = require("./eventController");

var port = 3000; 

app.get("/data/event/:id",events.get);
app.post("/data/event/:id",events.save);

app.listen(port,function(){
    console.log("Server running at "+port);
});
