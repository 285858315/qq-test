'use strict'
var odata = require('node-odata')
var server = odata('mongodb://root:root@localhost/test');
server.resource('user', { 
  name: String, 
  pwd: String
})

server.get("/index.html",function(req,res,next){
	res.sendFile(__dirname +"/index.html")
})
server.listen(3000);