/*

This Script is licensed under GPL v3 or higher

Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>

*/



// function avanzaBarra(progreso){

//     let value = progreso.getAttribute("value");

//     console.log(value);

// }

function hacerProcesos(progreso) {


    progreso.classList.add("estabaEscondido");



}

function startMigration() {

    let step = document.querySelectorAll('[data-step]');

    for (let i = 0; i < step.length; i++) {

        hacerProcesos[i];
    }



}

function init() {
    console.info(" * Init envirnoment ");

    // Set click function on button
    document.querySelector("button").addEventListener("click", startMigration);
}

// Init the environment when all is ready
window.onload = init;