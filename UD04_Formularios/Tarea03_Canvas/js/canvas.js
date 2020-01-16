function buildGrafico(){
    console.info(" * Construyendo grafico ");
    
    const canvas = document.querySelector("canvas");

    let ctx = canvas.getContext("2d");

}

function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
}


function init(){
    console.log(" * Init ");
    loadListeners();
    
}

window.onload=init;