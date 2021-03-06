//dependiendo de cual se coja hace un grafico 
function tipoGraficos(){
    console.info(" * Construyendo grafico ");

    dioses = [];

   let nombre = document.querySelectorAll("input[class='left']");
   let poder = document.querySelectorAll("input[class='right']"); 
   
    for (let i = 0; i <4; i++) {
       
         dioses.push({

             nombre: nombre[i].value,
             poder: parseInt(poder[i].value),
             colores: arrayColores[i]
         });
       
    }
     

    if(tipoGrafico == "circular"){
        buildGraficoCircular();
    }

    if(tipoGrafico == "barras"){
        buildGraficoBarras();
    }

    if(tipoGrafico == "lineas"){
        buildGraficoLineal();
    }

}

//grafico circular
function buildGraficoCircular() {
   
    console.log("circular");
    
    const canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    let total =0;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    dioses.forEach(dios => {
       total += dios.poder;
    });

    let anguloPrincipio = 0;
    let radio = 120;
    let centroX = canvas.width / 2;
    let centroY = canvas.height / 2;
    let i = 0;

    dioses.forEach(dios => {

        ctx.fillStyle = arrayColores[i];
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';

        ctx.beginPath();

        let anguloFinal = ((dios.poder / total) * Math.PI * 2) + anguloPrincipio;

        ctx.moveTo(centroX, centroY);
        ctx.arc(centroX, centroY, radio, anguloPrincipio, anguloFinal, false);
        ctx.lineTo(centroX, centroY);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.closePath();

        anguloPrincipio = anguloFinal;
        i++;
    });
    
    
   

}

//grafico de barras
function buildGraficoBarras() {
    console.log("barras");


    let i = 0;
    let anchuraBarra = 50;
    let posicionX = 40;

    const canvas = document.querySelector("canvas");

    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    canvas.width = 800;
    canvas.height = 500;

    ctx.font = '20px sans-serif';

    dioses.forEach(dios => {

        ctx.fillStyle = arrayColores[i];

        ctx.fillRect(posicionX, canvas.height - dios.poder, anchuraBarra, dios.poder);

        ctx.fillText(dios.nombre, posicionX, canvas.height - dios.poder);

        posicionX += 100;
        i++;
    });

    dibujaMarcoGrafica(ctx);
}

//grafico de lineas
function buildGraficoLineal() {
    console.log("lineas");

    const canvas = document.querySelector("canvas");

    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.lineWidth = 1;

    let startPoscionX = 0;
    let poderDios = canvas.height;

    ctx.font = '20px sans-serif';

    ctx.moveTo(startPoscionX, poderDios);

    dioses.forEach(dios => {

        startPoscionX += 100;
        poderDios = dios.poder;
        ctx.lineTo(startPoscionX, canvas.height - dios.poder); 
        ctx.fillText(dios.nombre, startPoscionX, canvas.height - dios.poder);
        ctx.moveTo(startPoscionX, canvas.height - poderDios);

    });
    ctx.stroke();
    dibujaMarcoGrafica(ctx);
}

function dibujaMarcoGrafica(ctx){
 
    let x = 800;
    let y = 500;

    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;

     for (let i = 0; i < 2; i++) {
         
        ctx.moveTo(0,500);
     
        ctx.lineTo(x,y);
         x = 0;
         y = 0;
     }

    ctx.stroke();
 
}

// todos los listeners
function loadListeners(){

    document.querySelector("input[name='grafiqueame']").addEventListener("click",tipoGraficos);
    document.querySelector("select").addEventListener('change', seleccionGrafico);
}


// coge el value del select
function seleccionGrafico() {
    
   tipoGrafico= this.value;

}

function init(){
  
    loadListeners();
    
}

let arrayColores = ["red","grey", "green", "purple"];
let dioses;
let tipoGrafico;
window.onload=init;