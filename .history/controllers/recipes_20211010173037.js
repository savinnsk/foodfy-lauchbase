const fs = require("fs");
const data = require("../data.json");

exports.create = function (req , res ){
  
    const keys = Object.keys(req.body)

    data.recipes.push(req.body) 
  
    for( key of keys) {
      if(req.body[key] == ""){
        return res.send("Por favor preencha todos os campos")
      }
    }


    fs.writeFile("data.json" , JSON.stringify(data),function(err){
        if(err) return res.send("Error ao salvar dados")
         return res.redirect("/")   
    } )
  
   

}