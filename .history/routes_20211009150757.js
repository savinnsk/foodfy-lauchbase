const express = require("express"); 
const routes = express.Router();
const data = require("./data")

routes.get("/", function(req ,res){
    return res.render("index" , { datas : data });   
    })
    
    
    
routes.get("/about",function(req ,res){
    return res.render("about");   
    })
    
    
routes.get("/revenue", function (req , res ){   
    return res.render("revenue" , { data : data });  
    })
    
    
routes.get("/recipes/:id", function(req , res){    
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


routes.get("/admin/recipes" , function (req , res) {
    return res.render("admin/recipes/listRecipes"  , { data : data })
})    


    
routes.get("admin/filds/:id", function(req , res){    
    const id = req.params.id
  
    // function to find especific id     
      const data_function = data.find(function (data_function) {
        return(data_function.id == id)        
      })
  
     if (!data_function) {
         return res.send("Receita não encontrada!")
      }
  
    res.render("/admin/recipes/filds", { data_function })
  })


    module.exports = routes ;