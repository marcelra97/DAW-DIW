var arrayMapa = new Array();
var hijo;



window.onload = function() {

    cargarMapa()

};

window.addEventListener('keydown', function(evento) {


    movimientoPersonaje(evento.key);

}, false);

arrayMapa = [
    [7, 7, 7, 7, 7, 7, 7, 7, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]
];

//Posicion Inicial
var x = 0;
var y = 8;

function cargarMapa() {

    for (let filas = 0; filas < arrayMapa.length; filas++) {

        for (let columnas = 0; columnas < arrayMapa[0].length; columnas++) {

            hijo = document.createElement("div");

            if (arrayMapa[filas][columnas] == 0) {

                hijo.classList.add("camino");

            }

            if (arrayMapa[filas][columnas] == 1) {

                hijo.classList.add("pilar");
            }

            if (arrayMapa[filas][columnas] == 2) {

                hijo.classList.add("personaje");
            }

            if (arrayMapa[filas][columnas] == 3) {

                hijo.classList.add("momia");
            }

            if (arrayMapa[filas][columnas] == 7) {

                hijo.classList.add("muro");
            }

            document.getElementById("mapa").appendChild(hijo);
            arrayMapa[filas][columnas] = hijo;
        }

    }
    console.table(arrayMapa);

}

/*Se esta creando otro mapa encima si le digo que vuelva a cargar el mapa en el movimiento
  hay que mirar como hacer que no me pinte otro mapa sino que me lo recargue
*/
function movimientoPersonaje(teclado) {

    //ArrowDown, ArrowUp, ArrowRight, ArrowLeft


    if (teclado == "ArrowDown") {

        moverAbajo();

    }

    if (teclado == "ArrowUp") {


        moverArriba();

    }

    if (teclado == "ArrowRight") {

        moverDerecha();

    }

    if (teclado == "ArrowLeft") {

        moverIzquierda();


    }


}

/*Cuando me muevo hacia abajo me borro en la posicion anterior el personaje y le añado un camino*/
function moverAbajo() {

    arrayMapa[x][y].classList.remove("personaje");
    arrayMapa[x][y].classList.add("huellas");
    x++;
    arrayMapa[x][y].classList.add("personaje");
    arrayMapa[x][y].classList.remove("huellas");

}
/*Cuando me muevo hacia abajo me borro en la posicion anterior el personaje y le añado un camino*/
function moverArriba() {

    arrayMapa[x][y].classList.remove("personaje");
    arrayMapa[x][y].classList.add("huellas");
    x--
    arrayMapa[x][y].classList.add("personaje");
    arrayMapa[x][y].classList.remove("huellas");
}

/*Cuando me muevo hacia abajo me borro en la posicion anterior el personaje y le añado un camino*/
function moverDerecha() {

    arrayMapa[x][y].classList.remove("personaje");
    arrayMapa[x][y].classList.add("huellas");
    y++
    arrayMapa[x][y].classList.add("personaje");
    arrayMapa[x][y].classList.remove("huellas");
}

/*Cuando me muevo hacia abajo me borro en la posicion anterior el personaje y le añado un camino*/
function moverIzquierda() {


    arrayMapa[x][y].classList.remove("personaje");
    arrayMapa[x][y].classList.add("huellas");
    y--
    arrayMapa[x][y].classList.add("personaje");
    arrayMapa[x][y].classList.remove("huellas");

}