window.addEventListener('keydown', function(e) {

    //me guardo la key
    var key = e.keyCode;

    pulsarTecla(key);

}, false);

function pulsarTecla(evento) {
    
    //me coge los divs del boton
    let boton = document.getElementById(evento);

     boton.classList.add("transicion");
        
     quitarAnimacion(evento);


    let audio =document.querySelector(`audio[data-key="${evento}"]`);
    
    audio.pause();
    
    audio.play();
    

}

function quitarAnimacion(evento){

    let caja = document.getElementById(evento);

    caja.addEventListener("transitionend", function(event){

        caja.classList.remove("transicion");

    },  false);


}


