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

    if (!caja.classList.contains('evoluciona') && !caja.classList.contains('desevoluciona') && !caja.classList.contains('ultimate')) {

        caja.classList.add("evoluciona");

    } else if (!caja.classList.contains('desevoluciona') && caja.classList.contains('evoluciona')) {

        caja.classList = 'desevoluciona';


    } else if (caja.classList.contains('desevoluciona')) {

        caja.classList = 'ultimate';


    }


}



window.onload = init;