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
        turno++;
      console.log(arrayJugador);
    }
  }
});
// funcion que compruebe arraypc[turno] con arrayusuario[turno] y asigne colores cada vez que se pulsa tecla

function comprobar() {
    let contadorGanar = 0;
    for(let i in arrayJugador){
        if(arrayJugador[i] == arrayPC[i]) {
            contadorGanar++;
            filaCasillas[i].classList.add("bg-lime-600","text-white");

        }else if(arrayPC.includes(arrayJugador[i]) && arrayJugador[i] != arrayPC[i]){
            filaCasillas[i].classList.add("bg-amber-400","text-white") //pinta amarillo
        }else{filaCasillas[i].classList.add("bg-zinc-400","text-white")} 
    }
    if(contadorGanar == 5){
        console.log("Has ganado");
        filaCasillas.forEach(e =>{
            e.classList.add("bg-lime-600","text-white");
            throw new Error("Has ganado!");;
        })
    }
}

// Funcion escribir input en las casillas ---OK----

function pintarCasillas(button) {
  arrayJugador[turno] = button.innerHTML;
  filaCasillas[turno].innerHTML = button.innerHTML;
}

// funcion para el enter, comprobar palabra.    ---OK----

function enter() {
    if(turno == 5){
        comprobar();
        fila++;
        filaCasillas = document.querySelectorAll(`.fila${fila}`);
        reset();

    }
}

// funciona bien.   ---OK----
function borrar() {
  arrayJugador.pop();
  filaCasillas[turno - 1].innerHTML = " ";
  turno -= 1;
}

//4- Funcion resetear   ---OK----

function reset() {
  turno = 0;
  arrayJugador = [];
  letrasAcertadas = 0;
}

