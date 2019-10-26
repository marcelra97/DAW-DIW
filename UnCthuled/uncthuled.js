var arrayMapa = new Array();
var hijo;


window.onload = function() {

    cargarMapa()


};

window.addEventListener('keydown', function(evento) {


    movimientoPersonaje(evento.key);

}, false);

setInterval(moverMomia, 800);

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

//Nivel
var nivel = 1;

//Vidas del Jugador 
var vidas = 4;
//para poder hacer el random del objeto
var seleccionPilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//Inventario
var inventario = new Array();

//la salida
var salida = false;

//array de momias
var momias = new Array();

//Numero de momias
var numeroMomias = 1;

//si la momia ha salido en de la caja
var momiacaja = true;

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
            document.getElementById("mapa").appendChild(hijo);
            arrayMapa[pilarX][pilarY] = hijo;


        }


    }
    objetosRandom();
    anyadirMomias();

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

    comprobarInventario();

    for (let i = 0; i < momias.length; i++) {

        if (momias[i].momiaX == x && momias[i].momiaY == y) {

            quitarVida(momias[i].momiaX, momias[i].momiaY);
        }

    }


}

/*Cuando me muevo hacia abajo me borro en la posicion anterior el personaje y le añado un camino*/
function moverAbajo() {

    //Cuando llegue al fondo el personaje no puede moverse mas para abajo si el siguiente es la fila 14
    if (x + 1 != 14) {

        /*Si lo que hay abajo del personaje contiene un pilar no puede avanzar hacia esa direccion */
        if (!arrayMapa[x + 1][y].classList.contains("pilar") && !arrayMapa[x + 1][y].classList.contains("pilarActivo")) {

            if (!salida) {

                salida = true;
                arrayMapa[0][8].classList.add("muro");
            }

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

                    cambioColor(pilarEntero)
                    contadorActivo = 0;
                }

            }

        }

        contadorActivo = 0;
        numeroPilar++;
    }

}

function cambioColor(pilarEntero) {

    //posicion 4 es el medio del pilar
    //guardarme los numeros de los pilares en un array para poder meter la imagen en un pilar random


    for (let i = 0; i < pilarEntero.length; i++) {

        pilarEntero[i].classList.add("pilarActivo");
        pilarEntero[i].classList.remove("pilar");

        //esto es para poner en el inventario
        if (pilarEntero[4].classList.contains("pilarLlave")) {
            //mete la llave
            inventario[0] = "llave";

        } else if (pilarEntero[4].classList.contains("pilarSarcofago")) {
            //mete el sarcofago
            inventario[1] = "sarcofago";

        } else if (pilarEntero[4].classList.contains("pilarPergamino")) {
            //mete el pergamino
            inventario[2] = "pergamino";

        } else if (pilarEntero[4].classList.contains("momia")) {
            //sacar la momia en el mapa

                cajaMomia();

        }

    }

}

// crea una momia cuando aparezca en el pilar
function cajaMomia(){

    for(let i = 0; i < arrayMapa.length; i++){

        for(let j = 0; j < arrayMapa[0].length; j++){

            if(arrayMapa[i][j].classList.contains("momia") && arrayMapa[i][j].classList.contains("pilarActivo")){
                
                if(momiacaja){

                    momias.push(crearMomia(i+1,j));
                    momiacaja =false; 
                }
                    
            }

        }
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

//objeto momia
function Momia(momiaX = 0, momiaY = 0) {

    this.momiaX = momiaX;
    this.momiaY = momiaY;

}

//crear la momia
function crearMomia(x, y) {

    let momia = new Momia(x, y);

    return momia;

}

//anyado momias segun el nivel
function anyadirMomias() {

   
    for (let i = 0; i < numeroMomias; i++) {

        momias[i] = crearMomia(13, Math.floor(Math.random() * (13 - 8)) + 8);
    }

}

//movimiento de la momia
function moverMomia() {


    //como evitar que la momia traspase los pilares seguramente sea con una condicion que lleve contains
    if (salida) {


        for (let i = 0; i < momias.length; i++) {


            //si la x de la momia es menor que la posicion del personaje esta se suma.
            if (momias[i].momiaX < x) {

                //si arriba hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
                if (!arrayMapa[momias[i].momiaX + 1][momias[i].momiaY].classList.contains("pilar") && !arrayMapa[momias[i].momiaX + 1][momias[i].momiaY].classList.contains("pilarActivo")) {

                    arrayMapa[momias[i].momiaX][momias[i].momiaY].classList.remove("momia");
                    momias[i].momiaX++;
                    arrayMapa[momias[i].momiaX][momias[i].momiaY].classList.add("momia");
                }


                //si es mayor esta se resta
            } else if (momias[i].momiaX > x) {

                //si abajo hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
                if (!arrayMapa[momias[i].momiaX - 1][momias[i].momiaY].classList.contains("pilar") && !arrayMapa[momias[i].momiaX - 1][momias[i].momiaY].classList.contains("pilarActivo")) {

                    arrayMapa[momias[i].momiaX][momias[i].momiaY].classList.remove("momia");
                    momias[i].momiaX--;
                    arrayMapa[momias[i].momiaX][momias[i].momiaY].classList.add("momia");
                }


            }
            //si la posicion Y de la momia es menor de la Y del personaje se suma
            if (momias[i].momiaY < y) {

                //si a tu derecha hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
                if (!arrayMapa[momias[i].momiaX][momias[i].momiaY + 1].classList.contains("pilar") && !arrayMapa[momias[i].momiaX][momias[i].momiaY + 1].classList.contains("pilarActivo")) {

                    arrayMapa[momias[i].momiaX][momias[i].momiaY].classList.remove("momia");
                    momias[i].momiaY++;
                    arrayMapa[momias[i].momiaX][momias[i].momiaY].classList.add("momia");

                }


                //si es mayor esta se resta
            } else if (momias[i].momiaY > y) {

                //si a tu izquierda hay un pilar no puedes avanzar, pero si no lo hay si que puedes avanzar 
                if (!arrayMapa[momias[i].momiaX][momias[i].momiaY - 1].classList.contains("pilar") && !arrayMapa[momias[i].momiaX][momias[i].momiaY - 1].classList.contains("pilarActivo")) {

                    arrayMapa[momias[i].momiaX][momias[i].momiaY].classList.remove("momia");
                    momias[i].momiaY--;
                    arrayMapa[momias[i].momiaX][momias[i].momiaY].classList.add("momia");

                }


            }

            if (momias[i].momiaX == x && momias[i].momiaY == y) {

                quitarVida(momias[i].momiaX, momias[i].momiaY);

            }
        }


    }



}

//Funcion para quitar vidas
function quitarVida(posX, posY) {

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

        arrayMapa[posX][posY].classList.remove("momia");

        //pongo todo en la posicion del principio
        x = 0;
        y = 8;
        salida = false;
        arrayMapa[x][y].classList.add("personaje");
        arrayMapa[x][y].classList.remove("huellas");
        arrayMapa[x][y].classList.remove("muro");

        //eliminarMomias(posX, posY);

    }
}

function comprobarInventario() {

    for (let i = 0; i < inventario.length; i++) {

        if (inventario[0] == "llave" && inventario[1] == "sarcofago") {

            arrayMapa[0][8].classList.remove("muro");

        }

    }
}

function eliminarMomias(posX, posY) {

     for (let i = 0; i < momias.length; i++) {

         if (momias[i].momiaY == posY && momias[i].momiaX == posX) {

             momias.splice(i, 0);

             
        }

     }

}