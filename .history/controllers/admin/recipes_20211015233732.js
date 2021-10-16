const fs = require("fs");
const data = require("../../data.json");

exports.create = function (req , res ){
  
    const keys = Object.keys(req.body)
    for( key of keys) {
      if(req.body[key] == ""){
        return res.send("Por favor preencha todos os campos")
      }} 
    
    let {  recipeUrl , ingredients , manner , infoAdd , author , title  } = req.body  
    let id = req.body.id =Number(data.recipes.length + 1) 

    data.recipes.push({
        id,
        recipeUrl,
        title,
        author,
        ingredients,
        manner,
        infoAdd,
     

    })

    fs.writeFile("data.json" , JSON.stringify(data ,null,2),function(err){
        if(err) return res.send("Error ao salvar dados")
         return res.redirect("/")   
    } )
  
   

}
exports.show = function (req , res){

        const id = req.params.id  
          
          const comparingId = data.recipes.find(function (recipe) {
            return(recipe.id == id)        
          })  
         if (!comparingId) {
             return res.send("Receita não encontrada!")
          }
          
        res.render("admin/recipes/show", { comparingId })
      }
exports.edit = function(req , res) {

  const id = req.params.id 

  const recipesTable = data.recipes.find(function (data_function) {
        return(data_function.id == id)        
      })  
     if (!recipesTable) {
         return res.send("Receita não encontrada!")
      }


  return res.render("admin/recipes/edit" ,   { recipesTable } )

 }
    
exports.update = function(req , res){

  const id = req.body;
  let count = 0;

  const recipesTabele = data.recipes.find(function( recipe ,idRecipe ) {
      if(id == recipe.id ){
        count = idRecipe ;
        return true

      }
  })

  
};