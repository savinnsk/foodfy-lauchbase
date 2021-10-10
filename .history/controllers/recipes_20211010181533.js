const fs = require("fs");
const data = require("../data.json");

exports.create = function (req , res ){
  
    const keys = Object.keys(req.body)
    for( key of keys) {
      if(req.body[key] == ""){
        return res.send("Por favor preencha todos os campos")
      }} 
    
    let {  recipeUrl , ingredients , manner , infoAdd   } = req.body  
    let id = req.body.id =Number(data.recipes.length + 1) 

    data.recipes.push({
        recipeUrl,
        ingredients,
        manner,
        infoAdd,
        id

    })

    fs.writeFile("data.json" , JSON.stringify(data ,null,2),function(err){
        if(err) return res.send("Error ao salvar dados")
         return res.redirect("/")   
    } )
  
   

}


exports.show = function (req , res){

        const id = req.params.id  
          
          const comparingId = data.find(function (recipes) {
            return(comparingId.id == id)        
          })  
         if (!comparingId) {
             return res.send("Receita não encontrada!")
          }
          
        res.render("admin/recipes/show", { data_function })
      }
    