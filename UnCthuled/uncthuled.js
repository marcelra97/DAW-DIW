var arrayMapa = new Array();
var hijo;


window.onload = function() {

    cargarMapa()


};

window.addEventListener('keydown', function(evento) {


    movimientoPersonaje(evento.key);

}, false);

setInterval(moverMomia, 900);

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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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

//Comprobacion pilares
var pilarX = 2;
var pilarY = 1;

//Posicion inicial Momia
var momiaX = 13;
var momiaY = 20;

//Vidas del Jugador 
var vidas = 4;
//para poder hacer el random del objeto
var seleccionPilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function cargarMapa() {

    for (let pilarX = 0; pilarX < arrayMapa.length; pilarX++) {

        for (let pilarY = 0; pilarY < arrayMapa[0].length; pilarY++) {

            hijo = document.createElement("div");

            if (arrayMapa[pilarX][pilarY] == 0) {

                hijo.classList.add("camino");

            }

            if (arrayMapa[pilarX][pilarY] == 1) {

                hijo.classList.add("pilar");


                /*Me he creado una segunda clase para pilar, para asi poder trabajar con los grupos de pilares*/

                //Primero compruebo las partes pares y le cambio los tres divs de arriba al pilar y les añado una clase
                if (pilarX % 2 == 0 && contadorPar < 3) {

                    //si lo es añado la clase pilar
                    hijo.classList.add("pilar" + pilarPar);

                    //y le sumo al contador par
                    contadorPar++;

                    //Compruebo las partes impares y le cambio los tres divs de abajo al pilar y les añado una clase    
                } else if (pilarX % 2 != 0 && contadorImpar < 3) {

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

            if (arrayMapa[pilarX][pilarY] == 2) {

                hijo.classList.add("personaje");
            }
            if (arrayMapa[pilarX][pilarY] == 7) {

                hijo.classList.add("muro");

            }

            if (pilarX == momiaX && pilarY == momiaY) {

                hijo.classList.add("momia")

            }

            document.getElementById("mapa").appendChild(hijo);
            arrayMapa[pilarX][pilarY] = hijo;


        }


    }
    objetosRandom();


}

/*Se esta creando otro mapa encima si le digo que vuelva a cargar el mapa en el movimiento
  hay que mirar como hacer que no me pinte otro mapa sino que me lo recargue
*/
function movimientoPersonaje(teclado) {

    //ArrowDown, ArrowUp, ArrowRight, ArrowLeft

    //contains me comprueba dentro del array la clase que le digo que compruebe si esta
    if (teclado == "ArrowDown") {

        moverAbajo();
        comprobarPilar();
    }

    if (teclado == "ArrowUp") {


        moverArriba();
        comprobarPilar();

    }

    if (teclado == "ArrowRight") {

        moverDerecha();
        comprobarPilar();

    }

    if (teclado == "ArrowLeft") {

        moverIzquierda();
        comprobarPilar();


    }

    if (momiaX == x && momiaY == y) {

        quitarVida();
    }

}

/*Cuando me muevo hacia abajo me borro en la posicion anterior el personaje y le añado un camino*/
function moverAbajo() {

    //Cuando llegue al fondo el personaje no puede moverse mas para abajo si el siguiente es la fila 14
    if (x + 1 != 14) {

        /*Si lo que hay abajo del personaje contiene un pilar no puede avanzar hacia esa direccion */
        if (!arrayMapa[x + 1][y].classList.contains("pilar") && !arrayMapa[x + 1][y].classList.contains("pilarActivo")) {

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

        if (!arrayMapa[x - 1][y].classList.contains("pilar") && !arrayMapa[x - 1][y].classList.contains("muro") && !arrayMapa[x - 1][y].classList.contains("pilarActivo")) {

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

        if (!arrayMapa[x][y + 1].classList.contains("pilar") && !arrayMapa[x][y + 1].classList.contains("muro") && !arrayMapa[x][y + 1].classList.contains("pilarActivo")) {

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

        if (!arrayMapa[x][y - 1].classList.contains("pilar") && !arrayMapa[x][y - 1].classList.contains("muro") && !arrayMapa[x][y - 1].classList.contains("pilarActivo")) {

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
    console.log(x);
    console.log(y);
}

function comprobarPilar() {

    //Comienza desde la esquina superior del primer pilar
    for (pilarX = 2; pilarX < arrayMapa.length; pilarX++) {

        for (pilarY = 1; pilarY < arrayMapa[1].length; pilarY++) {

            //comprobar en la posicion que me encuentro del pilar

            //para que no se salga del array cuando comprueba
            if (pilarY + 1 != 21 && pilarX + 1 != 14) {


                //si en la derecha y abajo hay otra clase pilar
                if (arrayMapa[pilarX][pilarY + 1].classList.contains("pilar") && arrayMapa[pilarX + 1][pilarY].classList.contains("pilar")) {

                    //miras si hay huellas a tu izquierda y arriba
                    if (arrayMapa[pilarX][pilarY - 1].classList.contains("huellas") && arrayMapa[pilarX - 1][pilarY].classList.contains("huellas")) {

                        arrayMapa[pilarX][pilarY].classList.add("activo");


                    }


                }

                //si en la izquierda, derecha y abajo hay otra clase pilar  
                if (arrayMapa[pilarX][pilarY - 1].classList.contains("pilar") && arrayMapa[pilarX][pilarY + 1].classList.contains("pilar") && arrayMapa[pilarX + 1][pilarY].classList.contains("pilar")) {

                    //miras si arriba hay huellas.
                    if (arrayMapa[pilarX - 1][pilarY].classList.contains("huellas")) {

                        arrayMapa[pilarX][pilarY].classList.add("activo");


                    }

                }

                //si abajo y izquierda hay otra clase pilar
                if (arrayMapa[pilarX + 1][pilarY].classList.contains("pilar") && arrayMapa[pilarX][pilarY - 1].classList.contains("pilar")) {

                    //miras arriba y a la derecha
                    if (arrayMapa[pilarX - 1][pilarY].classList.contains("huellas") && arrayMapa[pilarX][pilarY + 1].classList.contains("huellas")) {

                        arrayMapa[pilarX][pilarY].classList.add("activo");


                    }

                }

                //si arriba  y izquierda hay una clase pilar
                if (arrayMapa[pilarX - 1][pilarY].classList.contains("pilar") && arrayMapa[pilarX][pilarY - 1].classList.contains("pilar")) {

                    //mirar derecha y abajo
                    if (arrayMapa[pilarX][pilarY + 1].classList.contains("huellas") && arrayMapa[pilarX + 1][pilarY].classList.contains("huellas")) {

                        arrayMapa[pilarX][pilarY].classList.add("activo");


                    }


                }

                //si en la derecha, izquierda y arriba hay una clase pilar
                if (arrayMapa[pilarX][pilarY + 1].classList.contains("pilar") && arrayMapa[pilarX][pilarY - 1].classList.contains("pilar") && arrayMapa[pilarX - 1][pilarY].classList.contains("pilar")) {

                    //mirar hacia abajo
                    if (arrayMapa[pilarX + 1][pilarY].classList.contains("huellas")) {

                        arrayMapa[pilarX][pilarY].classList.add("activo");


                    }
                }

                //si en la derecha y arriba hay una clase pilar
                if (arrayMapa[pilarX][pilarY + 1].classList.contains("pilar") && arrayMapa[pilarX - 1][pilarY].classList.contains("pilar")) {

                    //mirar izquierda y abajo
                    if (arrayMapa[pilarX][pilarY - 1].classList.contains("huellas") && arrayMapa[pilarX + 1][pilarY].classList.contains("huellas")) {

                        arrayMapa[pilarX][pilarY].classList.add("activo");



                    }
                }

                cambiarPilar();

            }
        }

    }

}

function cambiarPilar() {

    var pilarEntero;
    var numeroPilar = 1;
    var contadorActivo = 0;

    // hace un bucle hasta que haya pasado por las 20 celdas
    while (numeroPilar < 21) {

        //cojo el pilar completo con todos sus divs
        pilarEntero = document.getElementsByClassName("pilar" + numeroPilar);

        //lo recorro
        for (let i = 0; i < pilarEntero.length; i++) {

            // y miro los que han sido rodeados por huellas
            if (pilarEntero[i].classList.contains("activo")) {

                //cuento los que han sido rodeados
                contadorActivo++;

                //si estan los seis los coloreo completamente
                if (contadorActivo == 6) {

                    cambioColor(pilarEntero, numeroPilar)
                    contadorActivo = 0;
                }

            }

        }

        contadorActivo = 0;
        numeroPilar++;
    }

}

function cambioColor(pilarEntero, numeroPilar) {

    //posicion 4 es el medio del pilar
    //guardarme los numeros de los pilares en un array para poder meter la imagen en un pilar random


    for (let i = 0; i < pilarEntero.length; i++) {

        pilarEntero[i].classList.add("pilarActivo");
        pilarEntero[i].classList.remove("pilar");

    }

}

function objetosRandom() {

    let contadorObjetos = 1;
    let contador = 0;

    while (contador < 20) {

        //creo un random
        let random = Math.random();

        //cojo el tamaño del array
        let tamañoSeleccion = seleccionPilar.length;

        // despues cojo un tamaño indice random
        let indiceRandom = Math.floor(random * tamañoSeleccion);

        // y el que salga me lo guardo, elimino del array ese numero tambien
        let pilarRandom = seleccionPilar.splice(indiceRandom, "1");


        let pilarCompleto = document.getElementsByClassName("pilar" + pilarRandom);

        for (let i = 0; i < pilarCompleto.length; i++) {

            //si es el primer objeto que indico aparece la llave en el pilar
            if (contadorObjetos == 1) {

                pilarCompleto[4].classList.add("pilarLlave");


            }

            //si es el segundo objeto que indico aparece el pergamino en el pilar
            if (contadorObjetos == 2) {
                //pone el pergamino
                pilarCompleto[4].classList.add("pilarPergamino");

            }

            //si es el tercer objeto que indico aparece el sarcofago en el pilar
            if (contadorObjetos == 3) {
                //pone el pergamino
                pilarCompleto[4].classList.add("pilarSarcofago");

            }

            //si es el cuarto objeto que indico aparece la momia en el pilar
            if (contadorObjetos == 4) {

                //pone el pergamino
                pilarCompleto[4].classList.add("momia");

            }



        }
        contadorObjetos++;
        contador++;
    }



}

//movimiento de la momia
function moverMomia() {

    //como evitar que la momia traspase los pilares seguramente sea con una condicion que lleve contains

    //si la x de la momia es menor que la posicion del personaje esta se suma.
    if (momiaX < x) {

        //si arriba hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
        if (!arrayMapa[momiaX + 1][momiaY].classList.contains("pilar") && !arrayMapa[momiaX + 1][momiaY].classList.contains("pilarActivo")) {

            arrayMapa[momiaX][momiaY].classList.remove("momia");
            momiaX++;
            arrayMapa[momiaX][momiaY].classList.add("momia");
        }


        //si es mayor esta se resta
    } else if (momiaX > x) {

        //si abajo hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
        if (!arrayMapa[momiaX - 1][momiaY].classList.contains("pilar") && !arrayMapa[momiaX - 1][momiaY].classList.contains("pilarActivo")) {

            arrayMapa[momiaX][momiaY].classList.remove("momia");
            momiaX--;
            arrayMapa[momiaX][momiaY].classList.add("momia");
        }


    }
    //si la posicion Y de la momia es menor de la Y del personaje se suma
    if (momiaY < y) {

        //si a tu derecha hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
        if (!arrayMapa[momiaX][momiaY + 1].classList.contains("pilar") && !arrayMapa[momiaX][momiaY + 1].classList.contains("pilarActivo")) {

            arrayMapa[momiaX][momiaY].classList.remove("momia");
            momiaY++;
            arrayMapa[momiaX][momiaY].classList.add("momia");

        }


        //si es mayor esta se resta
    } else if (momiaY > y) {

        //si a tu izquierda hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
        if (!arrayMapa[momiaX][momiaY - 1].classList.contains("pilar") && !arrayMapa[momiaX][momiaY - 1].classList.contains("pilarActivo")) {

            arrayMapa[momiaX][momiaY].classList.remove("momia");
            momiaY--;
            arrayMapa[momiaX][momiaY].classList.add("momia");

        }


    }

    if (momiaX == x && momiaY == y) {

        quitarVida();

    }

}

//Funcion para quitar vidas
function quitarVida() {

    let arrayVidas = new Array();

    //me cojo en un array las clases life  
    arrayVidas = document.getElementsByClassName("life");

    //si las vidas no son 0
    if (vidas != 0) {

        //quitas la clase life a ese div y restas las vidas
        arrayVidas[0].classList.remove("life");
        vidas--;

        arrayMapa[x][y].classList.remove("personajeAbajo");
        arrayMapa[x][y].classList.remove("personajeArriba");
        arrayMapa[x][y].classList.remove("personajeDerecha");
        arrayMapa[x][y].classList.remove("personajeIzquierda");

        arrayMapa[momiaX][momiaY].classList.remove("momia");

        //pongo todo en la posicion del principio
        x = 0;
        y = 8;
        arrayMapa[x][y].classList.add("personaje");
        arrayMapa[x][y].classList.remove("huellas");

        //pongo la momia en las posiciones
        momiaX = 13;
        momiaY = 20;

    } else {

        alert("Perdistes WEEYYYYY!!! pulsa F5 para continuar");


    }


}