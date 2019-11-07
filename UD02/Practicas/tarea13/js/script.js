function init() {

    document.querySelector('button').addEventListener('click', crearCaja);
    
    document.querySelector('.rodar').addEventListener('click', efectoRodar);

    document.querySelector('.rebotar').addEventListener('click', efectoRebote);
    
}

function crearCaja() {

    const nodoPadre = document.querySelector('container');
    const box = document.createElement('box');

    nodoPadre.appendChild(box);

    box.addEventListener('click', desplazarCaja);
}

function desplazarCaja(e) {
    
    let caja = e.target;

    if(!caja.classList.contains('evoluciona') && !caja.classList.contains('desevoluciona') && !caja.classList.contains('ultimate') ){
        
        caja.classList.add("evoluciona");
       
    }else if(!caja.classList.contains('desevoluciona') && caja.classList.contains('evoluciona')){

        caja.classList.remove("evoluciona");
        caja.classList.add("desevoluciona");

    }else if(caja.classList.contains('desevoluciona')){

        caja.classList.remove('desevoluciona');
        caja.classList.add('ultimate');
        caja.classList.add('ultimate:hover');
    }


}

function efectoRodar(){

    

}

function efectoRebote(){

    

}

window.onload = init;