//ejercicio 1 
function whatType(parametro){
    console.log("El valor ingresado es un: " + typeof parametro);
}

//ejercicio 2
function substraction(par1, par2){
    if(typeof par1 == "number" && typeof par2 == "number"){
        console.log(par1 + " - " + par2 +" = " + (par1-par2));
    }else{
        console.log("Uno de los parametros no es un numero");
    }
}

//ejercicio 3
function switcheroo(a, b){
    aux = a;
    a = b;
    b = aux;
    console.log("valor de a: " + a + "\nvalor de b: "+b);
}

//ejercicio 4 (se que podria usar typeof para controlar que lo que se ingrese sea un numero)
function infoCuadrado(lado){
    perimetro = lado * 4;
    area = lado * lado;
    console.log("El perimetro del cuadrado es: " + perimetro
                +"\nEl area del cuadrado es: "+ area);
}

//ejercicio 5
function farenheitToCelsius(par){
    return((par - 32 ) * 5 / 9);
}

//ejercicio 6
function stringUpAndDown(aString){
    console.log(aString.toUpperCase());
    console.log(aString.toLowerCase());
}

//ejercicio 7
function resultado(nota){
    console.log(nota);
    if(nota >= 0 && nota <= 2){
        console.log("Muy deficiente");
    } else if (nota > 2 && nota <=4){
        console.log("Ineficiente");
    } else if (nota > 4 && nota <= 5){
        console.log("Suficiente");
    } else if (nota > 5 && nota <= 6){
        console.log("Bien");
    } else if (nota > 6 && nota <= 8){
        console.log("Notable");
    } else if (nota > 8 && nota <= 10){
        console.log("Sobresaliente!");
    } else {
        console.log("El valor ingresado no es valido")
    }
}

//ejercicio 8
function cantDiasEnMes(numeroMes){
    switch(numeroMes){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            console.log("El mes " + numeroMes + " tiene 31 dias");
            break;
        case 4: case 6: case 9: case 11:
            console.log("El mes " + numeroMes + " tiene 30 dias");
            break;
        case 2:
            console.log("El mes 2 tiene 28 dias en años no bisiestos, y 29 en años bisiestos")
            break;
        default:
            console.log("El mes ingresado no es valido");
            break;
        }
}

//ejercicio 9
function tipoDescuento(codigo){
    switch(codigo){
        case "fiesta":
            console.log("El descuento para el Ford Fiesta es del 5%")
            break;
        case "focus":
            console.log("El descuento para el Ford Focus es del 10%")
            break;
        default:
            console.log("El codigo ingresado no es valido");
    }
}

resultado(5.4);