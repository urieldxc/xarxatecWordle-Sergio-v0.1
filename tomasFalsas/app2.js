const buttons = document.querySelectorAll(".botonLetras")
const letraDEL = document.getElementById("letraDEL");
const letraINTRO = document.getElementById("letraINTRO");

const arrayPalabras = ["MUNDO", "QUESO", "PERRO", "HARTO", "CASCO"];
let arrayPC = [];
let arrayJugador = [];
let turno = 0;
let fila = 1;
let filaCasillas = document.querySelectorAll(`.fila${fila}`);
window.addEventListener("load", iniciarJuego())

// 0- INICIAR JUEGO

function iniciarJuego(){
    palabraRandom();
}

// 1- PALABRA RANDOM
function palabraRandom(){
    let indiceRandom = Math.floor(Math.random() * (arrayPalabras.length - 0)) + 0;
    let palabraElegida = arrayPalabras[indiceRandom];
    arrayPC = [...palabraElegida]
    console.log(arrayPC)
}

// 2- Guarda eleccion en variable

buttons.forEach(button =>{

    button.addEventListener("click", pintar)
    function pintar(){
        if(turno < 5){
            arrayJugador[turno] = button.innerHTML;
            filaCasillas[turno].innerHTML = (button.innerHTML);
            turno ++;
            console.log(arrayJugador);
        }

        if(turno == 5) {
            fila++;
            filaCasillas = document.querySelectorAll(`.fila${fila}`);
            reset();
        }
    }
    
})

//4- Funcion resetear

function reset(){
    turno = 0;
    arrayJugador = [];
}

// funcion para el enter

letraINTRO.addEventListener("click", enter())

function enter(){

}