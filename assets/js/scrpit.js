console.log("Hola mundo");

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido")
let btnEnviar = document.getElementById ("btnEnviar");

btnEnviar.addEventListener("click", function(e) {
    e.preventDefault
    nombreV = nombre.value;
    apellidoV = nombre.value;

    if (nombreV === ""){
        error1.innerHTML = "Error al ingresar el nombre";
        error1.style.color = "red";
        return
    }
    




    //console.log(nombreV)
    //console.log(apellidoV)
    console.log('Estoy clickeando')
} 


)
