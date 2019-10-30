window.addEventListener('keydown', function(evento) {

    //me guardo la key
    var key = evento.keyCode;

    pulsarTecla(key);

}, false);

function pulsarTecla(evento) {

    //me coge los divs del boton
    let boton = document.getElementById(evento);

    boton.classList.add("transicion");

    if (evento == "81") {

        playMusic("braumQ");

    } else if (evento == "87") {

        playMusic("braumW");

    } else if (evento == "69") {

        playMusic("braumE");

    } else if (event == "82") {

        playMusic("braumR");

    }


}

function playMusic(tecla) {

    let audio = document.querySelector(`audio [data-key=${tecla.keyCode}]`);
    audio.play();
}