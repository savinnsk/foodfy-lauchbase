const fs = require("fs");
const data = require("../data.json");

exports.create = function(req , res){    
    const id = req.params.id 
      
      const comparingId = data.find(function (comparingId) {
        return(comparingId.id == id)        
      })
      
      
     if (!data_function) {
         return res.send("Receita não encontrada!")
      }
      
    res.render("admin/recipes/show", { data_function }) 

}


exports.show = function (req , res){

}