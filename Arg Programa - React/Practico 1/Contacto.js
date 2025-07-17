function mostrarPrecio(price){
    document.getElementById("precio").innerHTML = price + "$"
}

function contactar(){
    if(validarCamposContacto()){
        let nombreCompleto = document.getElementById("campoNombre").value + " " + document.getElementById("campoApellido").value;
        alert("Muchas gracias " + nombreCompleto + 
                ". A la brevedad nos prondremos en contacto para asistirlo con el plan " +
                document.querySelector('input[name="tipoSeguro"]:checked').value )
            }
    }

function validarCamposContacto(){
    if (document.getElementById("campoNombre").value == ""){
        alert("El Campo del nombre no puede estar vacío");
        return(false);
    }
    if (document.getElementById("campoApellido").value == ""){
        alert("El Campo del apellido no puede estar vacío");
        return(false);
    }
    if (document.getElementById("campoMail").value == ""){
        alert("El Campo del correo electronico no puede estar vacío");
        return(false);
    }
    if (document.querySelector('input[name="tipoSeguro"]:checked') == null){
        alert("Se debe elegir un tipo de seguro")
        return(false)
    }
    return(true)
}