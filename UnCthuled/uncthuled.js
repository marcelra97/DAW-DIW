var arrayMapa = new Array();
var hijo;
window.onload = function() {

    cargarMapa()

};

window.addEventListener('keydown', function(evento) {

   
    movimientoPersonaje(evento.key);

},false);

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

function cargarMapa() {

    alert(arrayMapa[0][8]);
    //var padre = document.getElementById("mapa");
    for (let x = 0; x < arrayMapa.length; x++) {

        for (let y = 0; y < arrayMapa[0].length; y++) {

            hijo = document.createElement("div");

            if (arrayMapa[x][y] == 0) {

                hijo.classList.add("camino");

            }

            if (arrayMapa[x][y] == 1) {

                hijo.classList.add("pilar");
            }

            if (arrayMapa[x][y] == 2) {

                hijo.classList.add("personaje");
            }

            if(arrayMapa[x][y] == 3){

                hijo.classList.add("momia");
            }

            document.getElementById("mapa").appendChild(hijo);
        }

    }

}
/*Se esta creando otro mapa encima si le digo que vuelva a cargar el mapa en el movimiento
  hay que mirar como hacer que no me pinte otro mapa sino que me lo recargue
*/ 
function movimientoPersonaje(teclado){

    //ArrowDown, ArrowUp, ArrowRight, ArrowLeft
        
    
    if(teclado == "ArrowDown"){
        
        arrayMapa[0][8] = 0;
        arrayMapa[1][8] = 2;

    }

    if(teclado == "ArrowUp"){

      
        
        
    }

    if(teclado == "ArrowRight"){

     
        
    }

    if(teclado == "ArrowLeft"){

        
        
        
    }
    

}
