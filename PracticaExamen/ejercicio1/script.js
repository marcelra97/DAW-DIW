
function enseñarDetalles(){
    
    //let usuario = document.querySelector("input[type='text']").value;
    //url ="http://api.chess.com/pub/player/"+usuario+"/games";
    
    datosJson.games.forEach(juego => {
        
        crearDiv(juego);
    });
}

function peticionJson(){

    fetch(url)
    .then(function(response) {
      return response.json();

    })
    .then(datos => {

        datosJson = datos;
        
    });

    //crearDiv();
   
}

function crearDiv(partida){
    
    let divDetalles = document.querySelector("#detalles");
    
    //div partida
    let divPartida = document.createElement("div");

    //div movimientos
    let divpng = document.createElement("p");
    divpng.innerText= partida.pgn;


    //url
    let partidaUrl = document.createElement("a");
    partidaUrl.setAttribute("href", partida.url);
    partidaUrl.innerText = "Enlace Partida";

    //ranked
    let ranked = document.createElement("input");
    ranked.setAttribute("type", "checkbox");

    if(partida.rated == true){

        ranked.setAttribute("checked",true);

    }

    divPartida.appendChild(divpng);
    divPartida.appendChild(partidaUrl);
    divPartida.appendChild(ranked);

    divDetalles.appendChild(divPartida);
    console.log(partida.url);
}

function init(){

    document.querySelector("button").addEventListener("click", enseñarDetalles);
    peticionJson();

}


let url = "https://api.chess.com/pub/player/aberlanas/games"; 
let datosJson;
window.onload = init;