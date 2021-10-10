const routes = require("./routes") 
const express = require("express");
const server = express();
server.use(routes)
const nunjucks = require("nunjucks");




//Middleware


server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));  // allow req with body
server.use(express.static("public"));
server.set("view engine" ,"njk");

nunjucks.configure("views",{

    express:server
,
  autoescape:false,
  //noCache vai desativar o cache automatioco do nunjucks que salva configurações
  noCache:true
})

//port
server.listen(5000 , function(){
console.log("server inizialzed")
})
