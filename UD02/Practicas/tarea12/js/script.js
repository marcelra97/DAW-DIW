function init() {

    document.querySelector('button').addEventListener('click', crearCaja);

}

function crearCaja() {

    const nodoPadre = document.querySelector('container');
    const box = document.createElement('box');

    nodoPadre.appendChild(box);

    box.addEventListener('click', desplazarCaja);
}

function desplazarCaja(e) {

    let caja = e.target;

    caja.classList.add('evoluciona');


    caja.addEventListener('click', vuelveCaja);

}

function vuelveCaja(e) {

    e.taget.classList.remove('evoluciona');

    e.target.classList.add('desevoluciona');

    caja.addEventListener('click', apareceSedefkar);

}

function apareceSedefkar(e) {


    e.target.classList.add('ultimate');

}

window.onload = init;