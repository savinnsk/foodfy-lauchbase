//begin


const express = require("express");
const server = express();
const nunjucks = require("nunjucks")
const data = require("./data")


//Middleware

server.use(express.static('public'));
server.set("view engine" ,"njk");


nunjucks.configure("views",{

    express:server
,
  autoescape:false,
  //noCache vai desativar o cache automatioco do nunjucks que salva configurações
  noCache:true
})


//routes

server.get("/", function(req ,res){

return res.render("index" , { datas : data });


})


server.get("/about",function(req ,res){


return res.render("about");

})

server.get("/revenue", function (req , res ){

return res.render("revenue" , { data : data });


})


server.get("/recipes/:id", function(req , res){


  const id = req.params.id

  // function to find especific id
  
    const data_function = data.find(function (data_function) {
      return(data_function.id == id)
      
    })

   if (!data_function) {
       return res.send("Receita não encontrada!")
    }

  res.render("recipes", { data_function })
})
// 
//port

server.listen(5000 , function(){

console.log("ok")

})
