var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("hello world from server.js")
});

app.use(express.static(__dirname +"/public"));
var server2= app.listen(3002);
console.log("Server running on port 3000");