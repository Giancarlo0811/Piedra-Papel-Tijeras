const textoJugador = document.querySelector('#textoJugador');
const textoComputadora = document.querySelector('#textoComputadora');
const textoResultado = document.querySelector('#textoResultado');
const puntosJugador = document.querySelector('#puntajeJugador');
const puntosComputadora = document.querySelector('#puntajeComputadora');
const ganador = document.querySelector('#ganador');
const btnReiniciar = document.querySelector('#btnReiniciar');

const piedra = document.querySelector('#piedra');
const papel = document.querySelector('#papel');
const tijeras = document.querySelector('#tijeras');

let jugador;
let computadora;
let resultado;
let puntajeJugador = 0;
let puntajeComputadora = 0;
let juegoTerminado = false;

function turnoComputadora() {
    const numRandom = Math.floor(Math.random() * 3) + 1;

    switch (numRandom) {
        case 1:
            computadora = 'PIEDRA';
            break;
        case 2:
            computadora = 'PAPEL';
            break;
        case 3:
            computadora = 'TIJERAS';
            break;
    }
}

piedra.addEventListener('click', () => {
    if (juegoTerminado) {
        return;
    }

    jugador = "PIEDRA";
    turnoComputadora();
    textoJugador.textContent = `JUGADOR: ${jugador}`;
    textoComputadora.textContent = `COMPUTADORA: ${computadora}`;
    textoResultado.textContent = verificarGanador();
    puntosJugador.textContent = `PUNTAJE JUGADOR: ${puntajeJugador}`;
    puntosComputadora.textContent = `PUNTAJE COMPUTADORA: ${puntajeComputadora}`;

    if (puntajeJugador === 5 || puntajeComputadora === 5) {
        juegoTerminado = true;
        mostrarGanador();
    }
});

papel.addEventListener('click', () => {
    if (juegoTerminado) {
        return;
    }

    jugador = "PAPEL";
    turnoComputadora();
    textoJugador.textContent = `JUGADOR: ${jugador}`;
    textoComputadora.textContent = `COMPUTADORA: ${computadora}`;
    textoResultado.textContent = verificarGanador();
    puntosJugador.textContent = `PUNTAJE JUGADOR: ${puntajeJugador}`;
    puntosComputadora.textContent = `PUNTAJE COMPUTADORA: ${puntajeComputadora}`;

    if (puntajeJugador === 5 || puntajeComputadora === 5) {
        juegoTerminado = true;
        mostrarGanador();
    }
});

tijeras.addEventListener('click', () => {
    if (juegoTerminado) {
        return;
    }

    jugador = "TIJERAS";
    turnoComputadora();
    textoJugador.textContent = `JUGADOR: ${jugador}`;
    textoComputadora.textContent = `COMPUTADORA: ${computadora}`;
    textoResultado.textContent = verificarGanador();
    puntosJugador.textContent = `PUNTAJE JUGADOR: ${puntajeJugador}`;
    puntosComputadora.textContent = `PUNTAJE COMPUTADORA: ${puntajeComputadora}`;

    if (puntajeJugador === 5 || puntajeComputadora === 5) {
        juegoTerminado = true;
        mostrarGanador();
    }
});

function verificarGanador() {
    if (jugador === "PIEDRA" && computadora === "PIEDRA") {
        return "EMPATE";
    } else if (jugador === "PAPEL" && computadora === "PAPEL") {
        return "EMPATE";
    } else if (jugador === "TIJERAS" && computadora === "TIJERAS") {
        return "EMPATE";
    } else if (jugador === "PIEDRA" && computadora === "PAPEL") {
        puntajeComputadora ++;
        return "TU PIERDES";
    } else if (jugador === "PIEDRA" && computadora === "TIJERAS") {
        puntajeJugador ++;
        return "TU GANAS";
    } else if (jugador === "PAPEL" && computadora === "PIEDRA") {
        puntajeJugador ++;
        return "TU GANAS";
    } else if (jugador === "PAPEL" && computadora === "TIJERAS") {
        puntajeComputadora ++;
        return "TU PIERDES";
    } else if (jugador === "TIJERAS" && computadora === "PAPEL") {
        puntajeJugador ++;
        return "TU GANAS";
    } else if (jugador === "TIJERAS" && computadora === "PIEDRA") {
        puntajeComputadora ++;
        return "TU PIERDES";
    }
}

function mostrarGanador() {

    if(puntajeJugador === 5) {
        ganador.textContent = 'LE GANASTE A LA COMPUTADORA';
    } else if (puntajeComputadora === 5) {
        ganador.textContent = 'PERDISTE CONTRA LA COMPUTADORA';
    }
    btnReiniciar.style.display = 'inline';
}

function reiniciarJuego() {
    puntajeJugador = 0;
    puntajeComputadora = 0;
    juegoTerminado = false;
    textoJugador.textContent = 'JUGADOR:';
    textoComputadora.textContent = 'COMPUTADORA:';
    textoResultado.textContent = 'RESULTADO:';
    puntosJugador.textContent = 'PUNTAJE JUGADOR: 0';
    puntosComputadora.textContent = 'PUNTAJE COMPUTADORA: 0';
    ganador.textContent = '';
    btnReiniciar.style.display = 'none';
}

btnReiniciar.addEventListener('click', () => {
    reiniciarJuego();
});
