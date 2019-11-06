
function init(){

    document.querySelector("button").addEventListener("click", crearCaja);
   
}

function crearCaja(){

    const nodoPadre = document.querySelector("container");
    const box = document.createElement("box");

    nodoPadre.appendChild(box);

    box.addEventListener("click", desplazarAdelante);
}

function desplazarAdelante(e){

   let caja = e.target;

   caja.classList.toggle("evoluciona");
}

window.onload=init;