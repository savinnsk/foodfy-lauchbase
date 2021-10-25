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

  const foundRecipe = data.recipes.find(function (data_function) {
        return(data_function.id == id)        
      })  
     if (!foundRecipe) {
         return res.send("Receita não encontrada!")
      }


  return res.render("admin/recipes/edit" ,   {  recipesTable : foundRecipe } )

 }                                                                              
    
exports.update = function(req , res){

  const {id} = req.body;
  let index = 0;

  const foundRecipe = data.recipes.find(function( recipe ,foundIndex ) {
      if(id == recipe.id ){
        index = foundIndex ;
        return true}
  });


  if (!foundRecipe) return res.send("recipe not found");

  

  const recipe = {
    ...foundRecipe,
    ...req.body,
    id: Number(req.body.id)
  }

 

data.recipes[index] = recipe;
 console.log(recipe)
 console.log(req.body)

fs.writeFile("data.json", JSON.stringify( data ,null, 2), function(err) {
  if(err) return res.send("write error!")


  return res.redirect('/')
})

  
};


exports.delete = function (req , res){

  const {id} = req.body 
  let index = 0 ;

}