window.onload = inicio;
var num;
let ceroNueve = ["cero","uno","dos", "tres","cuatro","cinco","seis","siete","ocho","nueve"];
let diezVeinte = ["diez","once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho","diecinueve","veinte"];
let multiplo10 = ["diez", "veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
let multiplos100 = ["cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
let mil = "mil";
var text ="";
class numero{

    constructor(num){
        this.num = num;
    }
    compobarNum(numero){
        console.log(numero.length);
        var numeroParse = parseInt(numero);
        console.log(numero.charAt(1));
        if (numero.length > 6) {
            console.log("Este numero no se puede imprimir");
        }else if(numero.length > 3 && numero.length < 7){
            if (numero.length == "6") {
                var cienmil = Math.trunc(numeroParse / 100000);      
                text += multiplos100[cienmil-1];
            }
            if (numero.charAt(1) != 0||numero.length == "5") {
                var diezmil = Math.trunc(numeroParse/10000);
                var diezmil = diezmil%10;
                text +=" "+  multiplo10[diezmil-1];
            }
            if (numero.charAt(2) != 0) {
                var num = Math.trunc(numeroParse/1000);
                num = num %10;
                text +="i"+ ceroNueve[num];
            }
            text+="mil ";
        }
    }

    ciento(numero){
        if (numero.length > 4) {
            
            var numeroParse = parseInt(numero);
            if (numero.charAt(3) != 0) {
                var cientos = Math.trunc(numeroParse/100);      
                var cien = cientos%10;
                text +=  multiplos100[cien-1];
            }
        }
    }

    decimales(numero){
        if (numero.length > 3) {
            var numeroParse = parseInt(numero);
            if (numero.charAt(2) != 0 && numeroParse%100>=20) {
                var decimales = Math.trunc(numeroParse/10);      
                var diez = decimales%10;
                text +=  multiplo10[diez-1];
            }
        }
    }
    compobar(aux){
        var aux = parseInt(aux);
        if (aux >20) {
            aux = aux%10;
        }
        switch (aux) {
            case 0:
                console.log(ceroNueve[aux]);
            break;
            case 1:
                console.log(text +=ceroNueve[aux]);
            break;
            case 2:
                console.log(text +=ceroNueve[aux]);
            break;
            case 3:
                console.log(text +=ceroNueve[aux]);
            break;
            case 4:
                console.log(text +=ceroNueve[aux]);
            break;
            case 5:
                console.log(text +=ceroNueve[aux]);
            break;
            case 6:
                console.log(text +=ceroNueve[aux]);
            break;
            case 7:
                console.log(text +=text +=ceroNueve[aux]);
            break;
            case 8:
                console.log(text +=ceroNueve[aux]);
            break;
            case 9:
                console.log(text +=ceroNueve[aux]);
            break;
            case 10:
                console.log(text +=diezVeinte[aux-10]);
            break;
            case 11:
                console.log(text +=diezVeinte[aux-10]);
            break;
            case 12:
                console.log(text +=diezVeinte[aux-10]);
            break;
            case 13:
                console.log(text +=diezVeinte[aux-10]);
            break;
            case 14:
                console.log(text +=diezVeinte[aux-10]);
            break;
            case 15:
                console.log(text +=diezVeinte[aux-10]);
            break;
            case 16:
                console.log(text +=diezVeinte[aux-10]);
            break;
            case 17:
                console.log(text +=diezVeinte[aux-10]);
            break;
            case 18:
                console.log(text +=diezVeinte[aux-10]);
            break;
            case 19:
                console.log(text +=diezVeinte[aux-10]);
            break;
            case 20:
                console.log(diezVeinte[aux-10]);
            break;
            
        }
    }
}

function inicio() {   
    document.getElementById("botonData").addEventListener("click", contarNum);
}

function contarNum(){
    var num = document.getElementById("texto").value;
    var numeroTest = new numero(num);
    numeroTest.compobarNum(numeroTest.num);
    numeroTest.ciento(numeroTest.num);
    numeroTest.decimales(numeroTest.num);
    numeroTest.compobar(numeroTest.num);
    console.log(text);
}