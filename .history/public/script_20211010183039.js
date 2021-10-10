//pega todos com classe card
const cards = document.querySelectorAll(".card");

for(let card of cards){
card.addEventListener("click" , function(){ //adicionado um evento de click ,como paramêtro e a função para executar o evento.
const id_recipes = card.getAttribute("id");//pegando o atributo
 //através de uma variavél
  window.location.href =`recipes/${id_recipes}`

})
}




function info_ingre() {
    if (document.getElementById("ingredients").value == "Esconder") {
          const list_ingre = document.querySelector(".ingredients").querySelector("ul")
        list_ingre.classList.remove("show")
      list_ingre.classList.add("hide")

        document.getElementById("ingredients").value = "Mostrar";
    }
    else {
        const list_ingre = document.querySelector(".ingredients").querySelector("ul")
        list_ingre.classList.remove("hide")
        list_ingre.classList.add("show")

        document.getElementById("ingredients").value = "Esconder";
    }
}

function madeof() {
    if (document.getElementById("madeof").value == "Esconder") {
        const made_list = document.querySelector(".madeof").querySelector("ul")
        made_list.remove("show")
        made_list.classList.add("hide")

        document.getElementById("madeof").value = "Mostrar";
    }
    else if (document.getElementById("madeof").value= "Mostrar")  {
        const made_list = document.querySelector(".madeof").querySelector("ul")
        made_list.classList.remove("hide")
        made_list.classList.add("show")

        document.getElementById("madeof").value = "Esconder";
    }
}

function information() {
    if (document.getElementById("info").value == "Esconder") {
        const info_list = document.querySelector(".info_add").querySelector("ul")
        info_list.classList.remove("show")
        info_list.classList.add("hide")
 
        document.getElementById("info").value = "Mostrar";
    }
    else {
        const info_list = document.querySelector(".info_add").querySelector("ul")
        info_list.classList.remove("hide")
        info_list.classList.add("show")

        document.getElementById("info").value = "Esconder";
    }
}


