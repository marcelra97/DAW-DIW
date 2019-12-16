function comprobarAnyo() {
    
    let divPrincipal = document.querySelector("#principal");

    divPrincipal.innerHTML = "";
    
    datosJson.features.forEach(fallas => {
        
        //si es la seccion principal la que esta activa miras las fallas principales
        if(seccionPrincipalActiva == true){

            //Si has puesto algo en desde cogera todas las fallas desde ese año
            if(anyoDesde == true && fallas.properties.anyo_fundacion > this.value ){

                crearDivs(fallas);

            } 
            
            //Si has puesto algo en hasta cogera todas las fallas hasta ese año
            if(anyoHasta == true && fallas.properties.anyo_fundacion < this.value){

                crearDivs(fallas);

            }


        //si es la infantil mira las infantiles    
        }else{

             //Si has puesto algo en desde cogera todas las fallas desde ese año
             if(anyoDesde == true && fallas.properties.anyo_fundacion_i > this.value ){

                crearDivs(fallas);

            } 
            
            //Si has puesto algo en hasta cogera todas las fallas hasta ese año
            if(anyoHasta == true && fallas.properties.anyo_fundacion_i < this.value){

                crearDivs(fallas);

            }


        }

    });
}


function quitarPalabras() {
    
    //si estas en el desde pone el booleando en true
    if(this.name == "filtroAñoDesde"){

        this.value = "";
        anyoDesde = true;
    //si estas en el hasta pone el booleando en true
    }else if(this.name == "filtroAñoHasta") {

        this.value = "";
        anyoHasta = true;
    }
    

}

//cada vez que se crea una falla hace esta funcion
function crearDivs(datosfallas) {

    let divPrincipal = document.querySelector("#principal");

    let divFalla = document.createElement("div");
    let imagen = document.createElement("img");
    let titulo = document.createElement("p");

    if (seccionPrincipalActiva == true) {

        imagen.setAttribute("src", datosfallas.properties.boceto);

    } else {

        imagen.setAttribute("src", datosfallas.properties.boceto_i);
    }

    titulo.innerHTML = datosfallas.properties.nombre;

    divFalla.appendChild(imagen);
    divFalla.appendChild(titulo);

    divPrincipal.appendChild(divFalla);


}

// seleccionas la seccion que quieras de la falla
function seleccionarFalla() {

    let seccionFalla = this.value;

    let divPrincipal = document.querySelector("#principal");
    divPrincipal.innerHTML = "";

    //recorro las fallas
    datosJson.features.forEach(fallas => {

        // si la principal es la seleccionada
        if (seccionPrincipalActiva == true) {

            //buscas la falla 
            if (fallas.properties.seccion == seccionFalla) {

                // y la pones
                crearDivs(fallas);

            }

            // si la infantil es la seleccionada
        } else {

            //la buscas y la pones 
            if (fallas.properties.seccion_i == seccionFalla) {

                crearDivs(fallas);
            }
        }
    });

}

// seleccion de las fallas infantiles
function seleccionarInfantil() {

    let select = document.querySelector("select");

    select.innerHTML = "";
    seccionPrincipalActiva = false;
    //me creo un array para hacer que no se repitan las secciones
    let arrayAux = new Array();

    //recorro las fallas enteras
    datosJson.features.forEach(seccionPrincipal => {

        let option = document.createElement("option");

        //y si no esta entra y lo pone en el option
        if (arrayAux.indexOf(seccionPrincipal.properties.seccion_i) == -1) {


            option.innerHTML = seccionPrincipal.properties.seccion_i;
            arrayAux.push(seccionPrincipal.properties.seccion_i);
            select.appendChild(option);
        }


    });
}


// seleccion de las fallas principales
function seleccionarPrincipal() {

    seccionPrincipalActiva = true;
    let select = document.querySelector("select");

    //elimino lo que haya en el select
    select.innerHTML = "";

    //me creo un array para hacer que no se repitan las secciones
    let arrayAux = new Array();

    //recorro las fallas enteras
    datosJson.features.forEach(seccionPrincipal => {

        let option = document.createElement("option");

        //y si no esta entra y lo pone en el option
        if (arrayAux.indexOf(seccionPrincipal.properties.seccion) == -1) {


            option.innerHTML = seccionPrincipal.properties.seccion;
            arrayAux.push(seccionPrincipal.properties.seccion);
            select.appendChild(option);
        }


    });
}

function obtenerJson() {

    fetch(busqueda)
        .then(respuesta => respuesta.json())
        .then(datos => {

            datosJson = datos;


            datos.features.forEach(fallas => {

                crearDivs(fallas);

            });



        });

        
}

function init() {

    obtenerJson();

    // Esto es para cuando tenga en secciones las fallas
    document.querySelector('select[name="filtroSeccion"]').addEventListener('change', seleccionarFalla);
    document.querySelector('input[value="principal"]').addEventListener('change', seleccionarPrincipal);
    document.querySelector('input[value="infantil"]').addEventListener('change', seleccionarInfantil);
    document.querySelector('input[name="filtroAñoDesde"]').addEventListener('focus', quitarPalabras);
    document.querySelector('input[name="filtroAñoHasta"]').addEventListener('focus', quitarPalabras);
    document.querySelector('input[name="filtroAñoDesde"]').addEventListener('blur', comprobarAnyo);
    document.querySelector('input[name="filtroAñoHasta"]').addEventListener('blur', comprobarAnyo);

}

let seccionPrincipalActiva = false;
let datosJson;
let anyoDesde = false;
let anyoHasta = false;
let busqueda = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";
window.onload = init;