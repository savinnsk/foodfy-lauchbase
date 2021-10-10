const fs = require("fs");
const data = require("../data.json");

exports.create = function(req , res){    
    const id = req.params.id 
    // function to find especific id     
      const data_function = data.find(function (data_function) {
        return(data_function.id == id)        
      })  
     if (!data_function) {
         return res.send("Receita não encontrada!")
      }
      
    res.render("admin/recipes/show", { data_function }) 

}


exports.show = function (req , res){

}