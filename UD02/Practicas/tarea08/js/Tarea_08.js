
window.addEventListener('keydown', function(evento) {
    
    //me guardo la key
    var key = evento.keyCode;
    
    pulsarTecla(key);

}, false);

function pulsarTecla(evento){

    //me coge los divs del boton
    var boton = document.getElementById(evento);

    boton.classList.add("transicion");
}
