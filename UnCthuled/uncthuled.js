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

//Para el grupo del pilar
var pilarPar = 1;
var pilarImpar = 1;

//Contadores para poder agrupar el pilar
var contadorPar = 0;
var contadorImpar = 0;

function cargarMapa() {

    for (let filas = 0; filas < arrayMapa.length; filas++) {

        for (let columnas = 0; columnas < arrayMapa[0].length; columnas++) {

            hijo = document.createElement("div");

            if (arrayMapa[filas][columnas] == 0) {

                hijo.classList.add("camino");

            }

            if (arrayMapa[filas][columnas] == 1) {

                hijo.classList.add("pilar");

                //La llave puesta en una posicion estatica
                if (filas == 3 && columnas == 2) {

                    hijo.classList.add("pilarLlave")
                }

                /*Me he creado una segunda clase para pilar, para asi poder trabajar con los grupos de pilares*/

                //Primero compruebo las partes pares y le cambio los tres divs de arriba al pilar y les añado una clase
                if (filas % 2 == 0 && contadorPar < 3) {

                    //si lo es añado la clase pilar
                    hijo.classList.add("pilar" + pilarPar);

                    //y le sumo al contador par
                    contadorPar++;

                    //Compruebo las partes impares y le cambio los tres divs de abajo al pilar y les añado una clase    
                } else if (filas % 2 != 0 && contadorImpar < 3) {

                    hijo.classList.add("pilar" + pilarImpar);

                    contadorImpar++;

                }

                //Cada tres pilares que cambio, reinicio el contador y al siguiente grupo le doy otro numero de pilar
                if (contadorPar == 3) {

                    contadorPar = 0;
                    pilarPar++;
                }

                //Cada tres pilares que cambio, reinicio el contador y al siguiente grupo le doy otro numero de pilar
                if (contadorImpar == 3) {

                    contadorImpar = 0;
                    pilarImpar++;
                }

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


}

/*Se esta creando otro mapa encima si le digo que vuelva a cargar el mapa en el movimiento
  hay que mirar como hacer que no me pinte otro mapa sino que me lo recargue
*/
function movimientoPersonaje(teclado) {

    //ArrowDown, ArrowUp, ArrowRight, ArrowLeft

    //contains me comprueba dentro del array la clase que le digo que compruebe si esta
    if (teclado == "ArrowDown") {

        moverAbajo();
        comprobarPilar(teclado);
    }

    if (teclado == "ArrowUp") {


        moverArriba();
        comprobarPilar(teclado);

    }

    if (teclado == "ArrowRight") {

        moverDerecha();
        comprobarPilar(teclado);

    }

    if (teclado == "ArrowLeft") {

        moverIzquierda();
        comprobarPilar(teclado);


    }


}

/*Cuando me muevo hacia abajo me borro en la posicion anterior el personaje y le añado un camino*/
function moverAbajo() {

    //Cuando llegue al fondo el personaje no puede moverse mas para abajo si el siguiente es la fila 14
    if (x + 1 != 14) {

        /*Si lo que hay abajo del personaje contiene un pilar no puede avanzar hacia esa direccion */
        if (!arrayMapa[x + 1][y].classList.contains("pilar")) {

            arrayMapa[x][y].classList.remove("personajeAbajo");
            arrayMapa[x][y].classList.remove("personajeDerecha");
            arrayMapa[x][y].classList.remove("personajeIzquierda");
            arrayMapa[x][y].classList.remove("personajeArriba");
            arrayMapa[x][y].classList.add("huellas");
            x++;
            arrayMapa[x][y].classList.add("personajeAbajo");
            arrayMapa[x][y].classList.remove("huellas");
        }
    }
}

/*Cuando me muevo hacia arriba me borro en la posicion anterior el personaje y le añado un camino*/
function moverArriba() {

    if (x - 1 != -1) {

        if (!arrayMapa[x - 1][y].classList.contains("pilar") && !arrayMapa[x - 1][y].classList.contains("muro")) {

            arrayMapa[x][y].classList.remove("personajeAbajo");
            arrayMapa[x][y].classList.remove("personajeDerecha");
            arrayMapa[x][y].classList.remove("personajeIzquierda");
            arrayMapa[x][y].classList.remove("personajeArriba");
            arrayMapa[x][y].classList.add("huellas");
            x--
            arrayMapa[x][y].classList.add("personajeArriba");
            arrayMapa[x][y].classList.remove("huellas");
        }
    }
}

/*Cuando me muevo hacia derecha me borro en la posicion anterior el personaje y le añado un camino*/
function moverDerecha() {

    if (y + 1 != 21) {

        if (!arrayMapa[x][y + 1].classList.contains("pilar") && !arrayMapa[x][y + 1].classList.contains("muro")) {

            arrayMapa[x][y].classList.remove("personajeAbajo");
            arrayMapa[x][y].classList.remove("personajeDerecha");
            arrayMapa[x][y].classList.remove("personajeIzquierda");
            arrayMapa[x][y].classList.remove("personajeArriba");
            arrayMapa[x][y].classList.add("huellas");
            y++
            arrayMapa[x][y].classList.add("personajeDerecha");
            arrayMapa[x][y].classList.remove("huellas");
        }
    }
}

/*Cuando me muevo hacia izquierda me borro en la posicion anterior el personaje y le añado un camino*/
function moverIzquierda() {

    if (y - 1 != -1) {

        if (!arrayMapa[x][y - 1].classList.contains("pilar") && !arrayMapa[x][y - 1].classList.contains("muro")) {

            arrayMapa[x][y].classList.remove("personajeAbajo");
            arrayMapa[x][y].classList.remove("personajeDerecha");
            arrayMapa[x][y].classList.remove("personajeIzquierda");
            arrayMapa[x][y].classList.remove("personajeArriba");
            arrayMapa[x][y].classList.add("huellas");
            y--
            arrayMapa[x][y].classList.add("personajeIzquierda");
            arrayMapa[x][y].classList.remove("huellas");
        }
    }
}

function comprobarPilar(teclado) {

    if (teclado == "ArrowUp" || teclado == "ArrowDown") {

        //Derecha

        arrayMapa[x][y + 1].classList.contains("pilar");
        //Izquierda
        arrayMapa[x][y - 1].classList.contains("pilar");

    } else if (teclado == "ArrowRight" || teclado == "ArrowLeft") {

        //arriba
        console.log(arrayMapa[x - 1][y].classList.contains("pilar"));
        arrayMapa[x - 1][y].classList.contains("pilar");
        //abajo
        arrayMapa[x + 1][y].classList.contains("pilar");

    }

}