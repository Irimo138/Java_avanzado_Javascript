window.onload= inicio;

function inicio() {   
    document.getElementById("botonData").addEventListener("click", contarNum);
}

var max = 0;
var arrayPos = [];

function contarNum() {
    var aux = document.getElementById("texto").value;
    const arrayNumeros = aux.split("");
    console.log(arrayNumeros[5]);
    for (let index = 0; index < arrayNumeros.length; index++) {
        if (((parseInt(arrayNumeros[index]) + parseInt(arrayNumeros[index+1]) + parseInt(arrayNumeros[index+2])) > max) && index+2 <= arrayNumeros.length) {
            arrayPos = new Array();
            max = parseInt(arrayNumeros[index]) + parseInt(arrayNumeros[index+1]) + parseInt(arrayNumeros[index+2]);
            arrayPos.push(arrayNumeros[index]);
            arrayPos.push(arrayNumeros[index+1]);
            arrayPos.push(arrayNumeros[index+2]);   
        }
    }
    console.log(max);
    console.log(arrayPos[0]);
    console.log(arrayPos[1]);
    console.log(arrayPos[2]);

}