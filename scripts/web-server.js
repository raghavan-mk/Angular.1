//web-server.js

var express = require("express");
var path = require("path");
var app = express();
var rootPath = path.normalize(__dirname+"/../");
app.use(express.static(rootPath+"/app"));

var port = 3001; 

app.listen(port,function(){
    console.log("Server running at "+port);
});
