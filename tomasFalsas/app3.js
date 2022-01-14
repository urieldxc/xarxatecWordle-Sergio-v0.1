const buttons = document.querySelectorAll(".botonLetras");
const letraDEL = document.getElementById("letraDEL");
const letraINTRO = document.getElementById("letraINTRO");

const arrayPalabras = ["MUNDO", "QUESO", "PERRO", "HARTO", "CASCO"];
let letrasAcertadas = 0;
let arrayPC = [];
let arrayJugador = [];
let turno = 0;
let fila = 1;

let filaCasillas = document.querySelectorAll(`.fila${fila}`); //Cambiar

window.addEventListener("load", iniciarJuego());

letraINTRO.addEventListener("click", enter);
letraDEL.addEventListener("click", borrar);


function iniciarJuego() {
  palabraRandom();
}

// 1- PALABRA RANDOM
function palabraRandom() {
  let indiceRandom = Math.floor(Math.random() * (arrayPalabras.length - 0)) + 0;
  let palabraElegida = arrayPalabras[indiceRandom];
  arrayPC = [...palabraElegida];
  console.log(arrayPC);
}

// 2- Guarda eleccion en variable

buttons.forEach((button) => {
  button.addEventListener("click", rellenar);

  function rellenar() {
    if (turno < 5) {
        pintarCasillas(button);
        comprobar(button);
        turno++;
      console.log(arrayJugador);
    }
  }
});
// funcion que compruebe arraypc[turno] con arrayusuario[turno] y asigne colores cada vez que se pulsa tecla

function comprobar(button) {
    if(arrayJugador[turno] == arrayPC[turno]){
        button.classList.add("bg-green-300");
        filaCasillas[turno].classList.add("bg-green-300");
        letrasAcertadas++;
    } 

    if(arrayJugador[turno] != arrayPC[turno]) {
        button.classList.add("bg-red-300"); 
        filaCasillas[turno].classList.add("bg-red-300");;
        console.log("NO es igual")
    }
}

function pintarCasillas(button) {
  arrayJugador[turno] = button.innerHTML;
  filaCasillas[turno].innerHTML = button.innerHTML;
}

// funcion para el enter, comprobar palabra.

function enter() {
  fila++;
  filaCasillas = document.querySelectorAll(`.fila${fila}`);
  reset();
}

// funciona bien.
function borrar() {
  arrayJugador.pop();
  filaCasillas[turno - 1].innerHTML = " ";
  turno -= 1;
}

//4- Funcion resetear

function reset() {
  turno = 0;
  arrayJugador = [];
  letrasAcertadas = 0;
}

