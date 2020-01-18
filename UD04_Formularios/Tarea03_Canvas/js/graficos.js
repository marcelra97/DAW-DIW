//dependiendo de cual se coja hace un grafico 
function tipoGraficos(){
    console.info(" * Construyendo grafico ");

    if(tipoGrafico == "circular"){
        buildGraficoCircular();
    }

    if(tipoGrafico == "barras"){
        buildGraficoBarras();
    }

    if(tipoGrafico == "lineas"){
        buildGraficoLineal();
    }

    const canvas = document.querySelector("canvas");

    let ctx = canvas.getContext("2d");

}

//grafico circular
function buildGraficoCircular() {
    
    console.log("circular");
    const canvas = document.querySelector("canvas");

    let ctx = canvas.getContext("2d");

}

//grafico de barras
function buildGraficoBarras() {
    console.log("barras")
    const canvas = document.querySelector("canvas");

    let ctx = canvas.getContext("2d");
}

//grafico de lineas
function buildGraficoLineal() {
    console.log("lineas")
    const canvas = document.querySelector("canvas");

    let ctx = canvas.getContext("2d");
}

// todos los listeners
function loadListeners(){

    document.querySelector("input[name='grafiqueame']").addEventListener("click",tipoGraficos);
    document.querySelector("input[name='grafiqueame']").addEventListener("click",crearJson);
    document.querySelector("select").addEventListener('change', seleccionGrafico);
}

//creo el json para guardar los dioses
function crearJson() {

    dioses = [];

   let nombre = document.querySelectorAll("input[class='left']");
   let poder = document.querySelectorAll("input[class='right']"); 

   for (let i = 0; i < nombre.length; i++) {
      
        dioses.push({

            "nombre": nombre[i].value,
            "poder": poder[i].value
        });
       
   }
   console.log(dioses);

}

// coge el value del select
function seleccionGrafico() {
    
   tipoGrafico= this.value;

}

function init(){
  
    loadListeners();
    
}

let dioses;
let tipoGrafico;
window.onload=init;