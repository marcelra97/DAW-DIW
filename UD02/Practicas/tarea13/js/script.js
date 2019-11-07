function init() {

    document.querySelector('button').addEventListener('click', crearCaja);

    crearDiv();

    document.querySelector('.sedefkarRodar').addEventListener('click', efectoRodar);

    document.querySelector('.sedefkarRebotar').addEventListener('click', efectoRebote);

}

var rueda = false;
var rebota = false;

function crearDiv() {

    let nodoheader = document.querySelector('header');

    let div = document.createElement('div');
    let div1 = document.createElement('div');

    div.classList.add('sedefkarRodar');
    div1.classList.add('sedefkarRebotar');

    nodoheader.appendChild(div);
    nodoheader.appendChild(div1);

}

function crearCaja() {

    const nodoPadre = document.querySelector('container');
    const box = document.createElement('box');

    nodoPadre.appendChild(box);

    box.addEventListener('click', desplazarCaja);
}

function desplazarCaja(e) {

    let caja = e.target;

    if (!caja.classList.contains('evoluciona') && !caja.classList.contains('desevoluciona') && !caja.classList.contains('ultimate')) {

        caja.classList.add("evoluciona");

    } else if (!caja.classList.contains('desevoluciona') && caja.classList.contains('evoluciona')) {

        caja.classList = 'desevoluciona';


    } else if (caja.classList.contains('desevoluciona')) {

        caja.classList = 'ultimate';

        caja.addEventListener('click', ruedaCthulhu);
        caja.addEventListener('click', rebotaCthulhu);

    }

}

function efectoRodar() {

    rueda = true;

}

function efectoRebote() {

    rebota = true;

}

function ruedaCthulhu() {

    if (rueda) {

        this.classList.add('rodar');
        this.classList.remove('rebotar');

    }
    rueda = false;

}

function rebotaCthulhu() {

    if (rebota) {

        this.classList.add('rebotar');
        this.classList.remove('rodar');


    }
    rebota = false;

}

window.onload = init;