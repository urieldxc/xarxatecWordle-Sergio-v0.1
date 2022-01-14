import arrayPalabras from "./arrayPalabras.js";

const buttons = document.querySelectorAll(".botonLetras");
const letraDEL = document.getElementById("letra-Backspace");
const letraINTRO = document.getElementById("letra-Enter");
const svgRecargar = document.getElementById("svgRecargar");
const divModal = document.getElementById("divModal");
const modal = document.getElementById("modal");
const eresUnTramposo = document.querySelector(".logo");
const teclasVirtuales = document.querySelectorAll("div > button");

const clasesTablero = `"mx-auto","w-4/6","gap-x-0","gap-x-0","gap-y-1","grid","grid-cols-5","grid-rows-6"`;
const numCasillas = 30;

let arrayPC = [];
let arrayJugador = [];
let turno = 0;
let fila = 1;
let estadoModal = 0;
let registro = [];
let letrasAcertadas = 0;




divModal.addEventListener("click", mostrarModal);
function mostrarModal() {
  if (estadoModal <= 0) {
    modal.classList.remove("hidden");
    estadoModal += 1;
    console.log(estadoModal);
  } else {
    modal.classList.add("hidden");
    estadoModal -= 1;
  }
}

eresUnTramposo.addEventListener("click", () => {
  console.log("Así no tiene gracia... " + arrayPC);
});

window.addEventListener("load", iniciarJuego());

svgRecargar.addEventListener("click", nuevaPartida);
letraINTRO.addEventListener("click", enter);
letraDEL.addEventListener("click", borrar);

letraINTRO.addEventListener("kewydown", enter);
letraDEL.addEventListener("kewydown", borrar);
buttons.forEach((button) => {
  button.addEventListener("click", rellenar);

  function rellenar() {
    if (turno < 5) {
      pintarCasillas(button);
      registro.push(button);
      turno++;
    }
  }
});
document.addEventListener("keydown", function (e) {
    let llaveLetra = e.key;
    let button = document.getElementById(`letra-${llaveLetra}`);

    if (turno < 5) {
      if (e.key != "Enter" && e.key != "Backspace") {
        pintarCasillas(button);
        registro.push(button);
        turno++;
      }
    }

    if (e.key == "Enter") {
      document.activeElement.blur();
      enter();
    }
    if (e.key == "Backspace") {
      document.activeElement.blur();
      borrar();
    }
});




function iniciarJuego() {
  palabraRandom();
  generarCasillas();
  rellenarCasillas();
  generarTecladoVirtual();
}

function palabraRandom() {
  let indiceRandom = Math.floor(Math.random() * arrayPalabras.length);
  let palabraElegida = arrayPalabras[indiceRandom];
  arrayPC = [...palabraElegida];
}

let filaCasillas = document.querySelectorAll(`.fila${fila}`);

function comprobar() {
  let contadorGanar = 0;
  for (let i in arrayJugador) {
    if (arrayJugador[i] == arrayPC[i]) {
      contadorGanar++;
      filaCasillas[i].classList.add("bg-lime-600", "text-white");
      registro.forEach((e) => {
        e.classList.add("bg-lime-600", "text-white");
      });
    } else if (
      arrayPC.includes(arrayJugador[i]) &&
      arrayJugador[i] != arrayPC[i]
    ) {
      filaCasillas[i].classList.add("bg-amber-400", "text-white");
      registro[i].classList.add("bg-amber-400", "text-white");
    } else {
      filaCasillas[i].classList.add("bg-zinc-400", "text-white");
      registro[i].classList.add("bg-zinc-400", "text-white");
    }
  }
  if (contadorGanar == 5) {
    filaCasillas.forEach((e) => {
      alert("Has ganado!")
      throw new Error("Has ganado!");
    });
  }
}

function pintarCasillas(button) {
  console.log(button);
  arrayJugador[turno] = button.innerHTML;
  filaCasillas[turno].innerHTML = button.innerHTML;
}

function enter() {
  console.log(arrayJugador);
  if (turno == 5) {
    comprobar();
    fila++;
    filaCasillas = document.querySelectorAll(`.fila${fila}`);
    reset();
  }
}

function borrar() {
  arrayJugador.pop();
  filaCasillas[turno - 1].innerHTML = " ";
  turno -= 1;
}
function reset() {
  turno = 0;
  registro = [];
  arrayJugador = [];
  letrasAcertadas = 0;
}

function nuevaPartida() {
  window.reset();
}




function generarCasillas() {
  document.querySelector("#tablero").classList.add(clasesTablero);
  let contador = 0;
  for (let i = 0; i < numCasillas; i++) {
    if (i % 5 == 0) {
      contador++;
    }
    document.querySelector("#tablero").appendChild(document.createElement("div")).classList.add(`fila${contador}`);
  }
}
function generarTecladoVirtual() {
  for (let i = 0; i < 29; i++) {
    if(i == 28 || i == 20){
      teclasVirtuales[i].classList.add("font-bold" ,"bg-gray-200" ,"border-none" ,"border-2","rounded","border-gray-500","w-16","h-16","flex","items-center","justify-center","cursor-pointer")
    } else{
    teclasVirtuales[i].classList.add("font-bold","bg-gray-200","border-none","border-2","rounded","border-gray-500","w-12","h-16","flex","items-center","justify-center","cursor-pointer")
  }}
}

function rellenarCasillas() {
  let todasLasCasillas = document.querySelectorAll("#tablero > div");
  todasLasCasillas.forEach((e) => {
    e.classList.add("flex", "items-center", "justify-center", "font-bold", "text-3xl", "border-solid", "border-2", "border-gray-300", "w-14", "h-14"
);
  });
}