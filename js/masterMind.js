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
        for (let index = 0; index < this.frase.length; index++) {
            var letra = false;
            let index2 = 0;
            do {
                if(this.frase.charAt(index) == intro.charAt(index2)){
                    cont++;
                    letra = true;
                }
                index2++;
                console.log(index2);
            } while (index2 < intro.length || letra == true);
        }
        return "Acierto de Letras: "+(cont);
    }
}
function inicio(){
    document.getElementById("botonData").addEventListener("click", calcular);
}

function calcular() {
    var introP = document.getElementById("texto").value;
    var intro = introP.toUpperCase();
    var m = new masterMind("RGGB");
    console.log(intro.length);
    console.log(m.comprobarPosicion(intro));
    console.log(m.comprobarLetras(intro))

}