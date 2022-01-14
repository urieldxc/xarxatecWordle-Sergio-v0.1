const buttons = document.querySelectorAll(".botonLetras")
const letraDEL = document.getElementById("letraDEL");
const letraINTRO = document.getElementById("letraINTRO");

const arrayPalabras = ["MUNDO", "QUESO", "PERRO", "HARTO", "CASCO"];
let check = true;
let posicionColumna= 0;
let posicionLinea = 0;
let turno = 0;
let arrayPC = [];
let arrayJugador = [];

const filaUno = document.querySelectorAll(".fila1");

// const primeraFila = [];
// filaUno.forEach(e =>{
//     primeraFila.push(e.innerHTML);
// })

palabraRandom();


/*genera un numero random que lo pasa por indice de arraypalabras para obtener una letra*/
function palabraRandom(){
    let indiceRandom = Math.floor(Math.random() * (arrayPalabras.length - 0)) + 0;
    let palabraElegida = arrayPalabras[indiceRandom];
    arrayPC = [...palabraElegida]
    console.log(arrayPC)
}


/* por cada button (es el selector de TODO lo que tenga clase ".botonletras") se genera dinámicamente
un addeventlistener para que reconozca todas las teclas numericas del teclado virtual*/
buttons.forEach((button) => {
    
    button.addEventListener('click', comprobar);
    function comprobar() {
        if(button.innerHTML == arrayPC[posicionColumna]){
            button.classList.add("bg-green-300");
            filaUno[posicionColumna].classList.add("bg-green-300");
            filaUno[posicionColumna].innerHTML = (button.innerHTML);
            arrayJugador.push(button.innerHTML)
            
            // posicionColumna++;
            // if(turno = 5){
            //     posicionLinea++;
            //     turno = 0;
            // }
        } 
        if(button.innerHTML != arrayPC[posicionColumna]) {
            button.classList.add("bg-red-300"); 
            filaUno[posicionColumna].classList.add("bg-red-300");
            filaUno[posicionColumna].innerHTML = (button.innerHTML);
            arrayJugador.push(button.innerHTML)
            posicionColumna++;
        }
    }

    
});

//TODO: falta enter y delete.
//TODO 2: contar cada click como un turno, exceptuando cuando se borre, que se restara un turno y su letra
/*TODO 3: revisar el código: https://programadorwebvalencia.com/ahorcado-en-javascript-es6-comentado/
tiene buenas ideas y tendría que estudiarmelo bien
*/

/*Hasta ahora el código al seleccionar una tecla, comprueba de manera chapucera con el indice de la 
palabra elegida y si es correcta sale verde o rojo si no lo es. además lo pinta en el primer hueco,
tendría también que encontrar el modo de hacer que pase al siguiente hueco etc. */