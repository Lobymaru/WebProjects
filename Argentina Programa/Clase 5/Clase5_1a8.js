
function basicStringArray(){
    //Ejercicio 1
    const colores = ["blanco", "azul", "rojo", "verde", "naranja"];

    //Ejercicio 2 (asumo que el 3er elemento se refiere a la 3ra posicion en el array)
    const color3 = colores[2];

    //Ejercicio 3
    console.log("Ejercicio 1+2+3: " + color3.charAt(0));
}


//Ejercicio 4
    function Random(){
    const randomN = Math.floor(Math.random() * 100) + 1;
    console.log( "\nEjercicio 4: "  + randomN);
}

//Ejercicio 5
function fillArray(){
    let array1to10 = [];
    console.log("\nEjercicio 5: "); 
    for (i = 1; i <= 10; i++ ){
        array1to10.push(i);
    }
    console.log(array1to10);
}

//Ejercicio 6
function fillRandomArray(){
    let arrayRandom1to10 = [];
    console.log("\nEjercicio 6: ");
    for (i = 0; i < 10; i++){
        arrayRandom1to10.push(Math.floor(Math.random() * 100));
    }
    console.log(arrayRandom1to10);
}
//Ejercicio 7
function copyArray(arrayToCopy){
    let arrayCopy = [];
    console.log("\nEjercicio7: ");
    for (i = 0; i < 10; i++){
        arrayCopy.push(arrayToCopy);
    }
    console.log(arrayCopy);
}

//Ejercicio 8

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addStrings(){

    let aWord = "";
    let chain = "";
   
    do {
        rl.question("Enter a string or 'cancel' to exit\n", (answer) => {
            aWord = answer.toLowerCase;
            console.log("enter");
        }); 
        if (aWord != "cancel"){
            chain += aWord + "-" 
        }
    }
    while(aWord != "cancel");
    console.log(chain);
    rl.close();
}

addStrings();