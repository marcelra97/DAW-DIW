
function Promesa(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 50);
    });
}

async function startMigration() {

    if (cont < listaStep.length) {

        listaStep[cont].classList.add("estabaEscondido");

        //en este if hacer la barra de progreso
        if (listaStep[cont].localName == "progress") {

            //recorro la barra del 0 al 100 para poder darle value y que avance
            for(let i = 0; i <= 100; i++ ){
                
                listaStep[cont].value = i;
                await Promesa(0);
            }

            //acaba la barra y le digo que pase al siguiente
            cont++;

            //y pulso otra vez el boton
            document.querySelector('button').click();
            

        }else{
            
            //si no es la barra pues hago un transitionend y luego llama y aumento en 1 el contador
            listaStep[cont].addEventListener('transitionend', startMigration);
            cont++;
        }
          
    }

}

function init() {
    console.info(" * Init envirnoment ");

    listaStep = document.querySelectorAll('[data-step]');

    // Set click function on button
    document.querySelector("button").addEventListener("click", startMigration);
}

let listaStep;
let cont = 0;

// Init the environment when all is ready
window.onload = init;