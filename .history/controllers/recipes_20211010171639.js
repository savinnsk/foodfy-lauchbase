const fs = require("fs")

exports.create = function (req , res ){
  
    const keys = Object.keys(req.body)

    let [] = req.body
  
    for( key of keys) {
      if(req.body[key] == ""){
        return res.send("Por favor preencha todos os campos")
      }
    }


    fs.writeFile("data.json" , JSON.stringify)
  
    return res.send(req.body)   

}