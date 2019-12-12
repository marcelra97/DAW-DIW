function seleccionarFalla() {

}

function seleccionarInfantil() {

    let select = document.querySelector("select");

    select.innerHTML = "";

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



function seleccionarPrincipal() {

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

            let divPrincipal = document.querySelector("#principal");

            datos.features.forEach(fallas => {

                let divFalla = document.createElement("div");
                let imagen = document.createElement("img");
                let titulo = document.createElement("p");

                imagen.setAttribute("src", fallas.properties.boceto);
                titulo.innerHTML = fallas.properties.nombre;

                divFalla.appendChild(imagen);
                divFalla.appendChild(titulo);

                divPrincipal.appendChild(divFalla);



            });



        });
}

function init() {

    obtenerJson();

    // Esto es para cuando tenga en secciones las fallas
    document.querySelector('input[value="filtroSeccion"]').addEventListener('change', seleccionarFalla);
    document.querySelector('input[value="principal"]').addEventListener('change', seleccionarPrincipal);
    document.querySelector('input[value="infantil"]').addEventListener('change', seleccionarInfantil);

}

let datosJson;
let busqueda = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";
window.onload = init;