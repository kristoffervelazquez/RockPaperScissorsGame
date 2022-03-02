const eleccionComputadoraDisplay = document.querySelector('#eleccion-computadora');
const eleccionJugadorDisplay = document.querySelector('#eleccion-jugador');
const resultadoDisplay = document.querySelector('#resultado');
const contadorDisplay = document.querySelector('#counter')

const eleccionesPosibles = document.querySelectorAll('button');
let eleccionJugador, eleccionComputadora, resultado;
let contador = 0;

document.addEventListener('DOMContentLoaded', (evt) => {
    eleccionesPosibles.forEach(eleccionPosible => eleccionPosible.addEventListener('click', (evt) => {
        eleccionJugador = evt.target.textContent;
        eleccionJugadorDisplay.innerHTML = eleccionJugador;
        generarEleccionComputadora();
        obtenerResultado();
    }));
    numeroGanadas(contador);    
});


function generarEleccionComputadora() {
    const numeroRandom = Math.floor(Math.random() * eleccionesPosibles.length) + 1;
    // console.log(numeroRandom);


    if (numeroRandom === 1) {
        eleccionComputadora = 'Rock';
    } else if (numeroRandom === 2) {
        eleccionComputadora = 'Paper';
    } else {
        eleccionComputadora = 'Scissors';
    }
    eleccionComputadoraDisplay.innerHTML = eleccionComputadora;
    obtenerResultado(eleccionComputadora);
}

function obtenerResultado(eleccionComputadora) {
    if (eleccionComputadora === eleccionJugador) {
        resultado = "It's a draw";

    } else if (eleccionJugador == 'Rock' && eleccionComputadora == 'Scissors') {
        resultado = 'You win!!!';
        contador = contador + 1
    } else if (eleccionJugador == 'Rock' && eleccionComputadora == 'Paper') {
        resultado = 'You lost';
    } else if (eleccionJugador == 'Paper' && eleccionComputadora == 'Scissors') {
        resultado = 'You lost';
    } else if (eleccionJugador == 'Paper' && eleccionComputadora == 'Rock') {
        resultado = 'You win!!!';
        contador = contador + 1
    } else if (eleccionJugador == 'Scissors' && eleccionComputadora == 'Paper') {
        resultado = 'You win!!!'
        contador = contador + 1
    } else if (eleccionJugador == 'Scissors' && eleccionComputadora == 'Rock') {
        resultado = 'You lost';
    }
    resultadoDisplay.innerHTML = resultado;
    setTimeout(() => {
        resultadoDisplay.innerHTML = ''
    }, 6000)

    if (resultado == 'You win!!!') {
        resultadoDisplay.classList.remove('perder');
        resultadoDisplay.classList.add('ganar');

    } else if (resultado == 'You lost') {
        resultadoDisplay.classList.remove('ganar');
        resultadoDisplay.classList.add('perder')
    } else {
        resultadoDisplay.classList.remove('perder');
        resultadoDisplay.classList.remove('ganar');
    }
    numeroGanadas(contador);
}

function numeroGanadas(contador) {
    contadorDisplay.innerHTML = contador;
}

// Prueba1