const routes = require("./routes") 
const express = require("express");
const server = express();

const nunjucks = require("nunjucks");
const methodOverride = require("method-override");





//Middleware

server.use(express.urlencoded({    
  // to support URL-encoded bodies
  extended: true}));  // allow req with body
server.use( express.json())
server.use(express.static("public"));
server.set("view engine" ,"njk");
server.use(methodOverride("_method"))
nunjucks.configure("views",{
 express:server,
 autoescape:false,
//noCache vai desativar o cache automatioco do nunjucks que salva configurações
  noCache:true
})
server.use(routes)


//port
server.listen(5000 , function(){
console.log("server inizialzed")
})
