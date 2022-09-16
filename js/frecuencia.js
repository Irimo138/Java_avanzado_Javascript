window.onload = inicio;

let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let contador;
let maximo = 0;
let maxLetra;
class texto{
    constructor(frase){
        this.frase = frase;
    }

    quitarEspacios(texto) {
        contador = new Array(27);
        let array = texto.split(" ");
        //console.log(array);
        let sinEspacios ="";
        for (let index = 0; index < array.length; index++) {
            sinEspacios += array[index];
            
        }
        //console.log(sinEspacios);
        this.frase = sinEspacios;
    }

    calcularfrecuencia(frase){
        for (let index = 0; index < letras.length; index++) {
            for (let index2 = 0; index2 < frase.length; index2++) {
                if (letras[index] == frase.charAt(index2)) {
                   if(contador[index] == undefined){
                    contador[index] = 1;
                   }else{
                       contador[index]++;
                    }
                }
            }
        }
    }

    calularMaximo(){
        for (let index = 0; index < contador.length; index++) {
            if(maximo < contador[index]){
                maximo = contador[index];
                maxLetra =letras[index];
            }  
        }   
    }

    pintarFrecuencia(){
        let caja = document.getElementById("resultado");
        let intro = document.createElement("h4");
        var porcentaje = ((maximo/this.frase.length)*100).toString();
        intro.textContent = maxLetra+": ########## "+ porcentaje.substring(0,4)+"%";
        caja.innerHTML = "";
        caja.appendChild(intro);
        console.log("");
        for (let index = maximo; index > 0; index--) {
            for (let index2 = 0; index2 < contador.length; index2++) {
                if(letras[index2] != maxLetra && contador[index2] == index){
                    let almohadillas = (index/maximo)*10;
                    let almohadillaPrint="";
                        almohadillaPrint += "#".repeat(almohadillas);
                    
                    let intro = document.createElement("h4");
                    intro.textContent = letras[index2]+":"+almohadillaPrint+" "+ ((index/this.frase.length)*100).toString().substring(0,4)+"%";
                    caja.appendChild(intro);
                }
            }
        }
    }
}

function inicio() {
    document.getElementById("bot").addEventListener("click", contar);
    document.getElementById("frase").addEventListener("keyup", contar);
}

function contar() {
    var variable = new texto(document.getElementById("frase").value);
    variable.quitarEspacios(variable.frase);   
    console.log(variable.frase) 
    variable.calcularfrecuencia(variable.frase);
    variable.calularMaximo();
    variable.pintarFrecuencia();

    


}