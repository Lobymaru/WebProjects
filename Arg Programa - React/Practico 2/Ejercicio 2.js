function mostrarResultado(res){
    document.getElementById("resultado").innerHTML = res
}

function suma(callback){
    let num1 = document.getElementById("operando1").value
    let num2 = document.getElementById("operando2").value
    let res= parseInt(num1)+parseInt(num2)
    callback(res)
}

function resta(callback){
    let num1 = document.getElementById("operando1").value
    let num2 = document.getElementById("operando2").value
    let res= num1-num2
    callback(res)
}

function multiplicacion(callback){
    let num1 = document.getElementById("operando1").value
    let num2 = document.getElementById("operando2").value
    let res= num1*num2
    callback(res)
}

function divicion(callback){
    let num1 = document.getElementById("operando1").value
    let num2 = document.getElementById("operando2").value
    let res= num1/num2
    callback(res)
}