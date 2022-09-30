window.onload = inicio;

class masterMind{
    constructor (frase){
        this.frase = frase;
    }

    comprobarPosicion(intro){
        var cont = 0;
        for (let index = 0; index < this.frase.length; index++) {
            if(this.frase.charAt(index) == intro.charAt(index)){
                cont++;
            }
        }
        return "Acierto de posiciones: "+cont;
    }

    comprobarLetras(intro){
        var cont = 0;
        var arrayIntro = intro.split("");
        var comprobar = new Array(4);
        for (let index = 0; index < this.frase.length; index++) {
            for (let index2 = index; index2 < arrayIntro.length; index2++) {
                if(this.frase.charAt(index) == arrayIntro[index2]){
                    comprobar[index] = 1;
                } 
            }    
        }
        for (let index = 0; index < comprobar.length; index++) {
            if(comprobar[index] == 1){
                cont++;
            }
            
        }

        return "Acierto de Letras: "+(cont);
    }
}
function inicio(){
    document.getElementById("botonData").addEventListener("click", calcular);
}

function calcular() {
    document.getElementById("anadir").innerHTML="";
    var introP = document.getElementById("texto").value;
    var intro = introP.toUpperCase();
    var m = new masterMind("RGGB");
    var añadir = document.createElement("h4");
    var respuesta = m.comprobarLetras(intro);
    añadir.textContent = respuesta;
    var añadir2 = document.createElement("h4");
    var respuesta2 = m.comprobarPosicion(intro);
    añadir2.textContent = respuesta2;
    document.getElementById("anadir").appendChild(añadir);
    document.getElementById("anadir").appendChild(añadir2);
}