//actividad 10
function convertirDolaresPesos(){
    let inputDolares = document.getElementById("campoDolares").value;
    document.getElementById("campoPesos").value = inputDolares*300;
    
}

function convertirPesosDolares(){
    let inputPesos = document.getElementById("campoPesos").value;
    document.getElementById("campoDolares").value = inputPesos/300;
}

//actividad 11
function convertirCentigradosFarenheit(){
    let inputCentigrados = document.getElementById("campoCentigrados").value;
    let calculoFarenheit = (inputCentigrados *9/5) +32;
    let aText = inputCentigrados + "° centigrados equivalen a " + calculoFarenheit + "° Farenheit!";  
    alert(aText);
}

//actividad 12
function armarCaja(){
    let cliente = document.getElementById("campoNombre").value;
    let material = document.getElementById("campoMaterial").value;
    let tamaño = document.querySelector('input[name="boxSize"]:checked') ;
    let comentarios = document.getElementById("campoComentarios").value;
    let nuevaCaja = "El cliente " + cliente + " encargó una caja de " + material + " " + tamaño.value + ". Ademas comenta lo siguiente:\n" + comentarios;
    alert(nuevaCaja);
}

//actividad 13
var randomNumber;
var lives;

function newGame(){
    lives = 3;
    randomizeNumber(randomNumber)
}

function randomizeNumber(){
    randomNumber = Math.floor(Math.random() * 6);
}

function guessNumber(){
    let guessing = document.getElementById("numeroUsuario").value;
    document.getElementById("fallo").innerHTML = "";
    if (itsANumberInRange(guessing)){      
        if (Number(guessing) == randomNumber){
            document.getElementById("buttonGuess").disabled = true;
            document.getElementById("acierto").innerHTML = "Felicidades! Usted acertó, el numero a adivinar era el " + randomNumber;
        }
        else{
            lives -=1;
            document.getElementById("vidas").innerHTML = lives;
            if (lives != 0){
                document.getElementById("fallo").innerHTML = "El numero " + guessing + " no es";
            }
            else{
                document.getElementById("fallo").innerHTML = "Juego terminado! no le quedan mas vidas"
                document.getElementById("buttonGuess").disabled = true;
            }
        }
    }
    else{
        alert("Solo se aceptan números entre el 0 y 5")
    }
}

function itsANumberInRange(aNumber){
    if(Number(aNumber) >= 0 && Number(aNumber) <=5){
        return true;
    }
    else{
        return false;
    }
}

function newGame(){
    lives = 3;
    randomizeNumber();
    document.getElementById("vidas").innerHTML = lives;
    document.getElementById("fallo").innerHTML = "";
    document.getElementById("acierto").innerHTML = "";
    document.getElementById("buttonGuess").disabled = false;
    document.getElementById("numeroUsuario").value = "";
}

//actividad 14

function addName(){
    let listOfNames = document.getElementById("lista");
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(document.getElementById("campoNombre").value));
    listOfNames.appendChild(item);
}