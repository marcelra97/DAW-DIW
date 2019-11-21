/*

This Script is licensed under GPL v3 or higher

Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>

*/



// function avanzaBarra(progreso){

//     let value = progreso.getAttribute("value");

//     console.log(value);

// }

let listaStep;
let contador = 0;

function startMigration() {

    if (contador < listaStep.length) {

        listaStep[contador].classList.add("estabaEscondido");

        //en este if hacer la barra de progreso
        if (listaStep[contador].localName == "progress") {

            //me coge el valor de la barra
            //haz un .value para poder mover el value
            let barra = listaStep[contador].getAttribute("value");


        }

        listaStep[contador].addEventListener('transitionend', startMigration);
        contador++;
    }



}

function init() {
    console.info(" * Init envirnoment ");

    listaStep = document.querySelectorAll('[data-step]');

    // Set click function on button
    document.querySelector("button").addEventListener("click", startMigration);
}

// Init the environment when all is ready
window.onload = init;