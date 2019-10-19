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

//Comprobacion pilares
var pilarX = 2;
var pilarY = 1;

function cargarMapa() {

    for (let pilarX = 0; pilarX < arrayMapa.length; pilarX++) {

        for (let pilarY = 0; pilarY < arrayMapa[0].length; pilarY++) {

            hijo = document.createElement("div");

            if (arrayMapa[pilarX][pilarY] == 0) {

                hijo.classList.add("camino");

            }

            if (arrayMapa[pilarX][pilarY] == 1) {

                hijo.classList.add("pilar");

                //La llave puesta en una posicion estatica
                if (pilarX == 3 && pilarY == 2) {

                    hijo.classList.add("pilarLlave")
                }

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

            if (arrayMapa[pilarX][pilarY] == 3) {

                hijo.classList.add("momia");
            }

            if (arrayMapa[pilarX][pilarY] == 7) {

                hijo.classList.add("muro");
            }

            document.getElementById("mapa").appendChild(hijo);
            arrayMapa[pilarX][pilarY] = hijo;
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

                    //miras si arriba hay huellas
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
   

    while(numeroPilar < 21){

        pilarEntero = document.getElementsByClassName("pilar" + numeroPilar);
    
        for(let i = 0; i < pilarEntero.length; i++){

            if(pilarEntero[i].classList.contains("activo")){

                contadorActivo ++;
                
                if(contadorActivo == 6){

                    cambioColor(pilarEntero)
                    contadorActivo = 0;
                }
            
            }

        }

        contadorActivo = 0;
        numeroPilar++;
    }
    
}

function cambioColor(pilarEntero){

    for(let i = 0; i < pilarEntero.length; i++){

        pilarEntero[i].classList.add("pilarActivo");
    }
    
}
// si los seis que estan alrededor mio tienen una clase en especifico entonces les cambias el color
//para esto primero tengo que comprobar si alrededor de los pilares hay huellas. si tienen una huella al lado pues cambian de clase
//comprobar para cada pilar si los seis suyos tuyos tienen la clase activo, si lo tienen
 //si es par hace la parte de arriba
               