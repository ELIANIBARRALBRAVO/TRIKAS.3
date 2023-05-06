let animales = ["zorrillo.png", "alpaca.png", "pantera.png", "perro.png", "pez.png"];

let correcta = [0,2,0,2,1];

let opciones = [];

opciones.push( ["ZORRILLO", "MARMOTA", "PERRO"] );
opciones.push( ["LLAMA", "BURRO", "ALPACA"] );
opciones.push( ["PANTERA", "GATITO", "LEONA"] );
opciones.push( ["GATO", "CABALLO", "PERRO"] );
opciones.push( ["PEZ GLOBO", "BLOBFISH", "UNA CABEZA CALVA"] );

let posActual = 0;

let cantidadAcertada = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertada = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarAnimales();
}

function cargarAnimales(){
    if(animales.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imganimal").src = animales[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        document.getElementById("n"+ opElegida).className = "nombre nombreAcertada";
        document.getElementById("l"+ opElegida).className = "letra letraAcertada";
        cantidadAcertada++;
    }else{
        document.getElementById("n"+ opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l"+ opElegida).className = "letra letraNoAcertada"; 

        document.getElementById("n"+ correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l"+ correcta[posActual]).className = "letra letraAcertada";   
    }
    posActual++;
    setTimeout(cargarAnimales,1000);
}
 
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";

    document.getElementById("numCorrectas").innerHTML = cantidadAcertada;
    document.getElementById("numIncorrectas").innerHTML = animales.length - cantidadAcertada;
}

function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";