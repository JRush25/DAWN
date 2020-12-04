let datosJSON = () => {
    fetch('http://localhost:3000/juegos')
    .then((resultado) => {
        return resultado.json()
    })  
    .then( (json) =>{
        let divJ = document.createElement("div")
        divJ.className = "juegos"
        let divPS2 = document.createElement("div") 
        divPS2.className = "ps2"
        let divPS3 = document.createElement("div")
        divPS3.className = "ps3"

        for(var i=0; i < json.length;i++){
            let img = document.createElement("img")
            img.id = json[i].Nombre
            img.src = json[i].src
            if(json[i].Plataforma == "PS2")
                divPS2.appendChild(img)
            else if(json[i].Plataforma == "PS3")
                divPS3.appendChild(img)
        }
        let h1n1 = document.createElement("h1")
        h1n1.textContent = "Play Station 2"
        let h1n2 = document.createElement("h1")
        h1n2.textContent = "Play Station 3"

        divJ.appendChild(h1n1)
        divJ.appendChild(divPS2)
        divJ.appendChild(h1n2)
        divJ.appendChild(divPS3)
              
        document.getElementById('contenedor').appendChild(divJ);
    })
} 
document.addEventListener('DOMContentLoaded', function() {
    datosJSON();
})

function myFunction() {
    var input, filter, contenedor, img, i, visible;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    contenedor = document.getElementById("contenedor");
    img = contenedor.getElementsByTagName("img");
    for (i = 0; i < img.length; i++) {
      visible = false;
      if (img[i].id.toUpperCase().indexOf(filter) > -1) {
        visible = true;
      }
      if (visible === true) {
        img[i].style.display = "";
      } else{
        img[i].style.display = "none";
      }
    }
  }
  