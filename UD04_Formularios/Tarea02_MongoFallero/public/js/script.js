function puntuacion() {

    let url = '/api/puntuaciones';
    let data = { idFalla: '', ip: '', puntuacion: '' };

    fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

}

function comprobarAnyo() {

    let divPrincipal = document.querySelector("#principal");

    divPrincipal.innerHTML = "";

    datosJson.features.forEach(fallas => {

        //si es la seccion principal la que esta activa miras las fallas principales
        if (seccionPrincipalInfantil == true) {

            //Si has puesto algo en desde cogera todas las fallas desde ese año
            if (anyoDesde == true && fallas.properties.anyo_fundacion > this.value) {

                crearDivs(fallas);

            }

            //Si has puesto algo en hasta cogera todas las fallas hasta ese año
            if (anyoHasta == true && fallas.properties.anyo_fundacion < this.value) {

                crearDivs(fallas);

            }


            //si es la infantil mira las infantiles    
        } else {

            //Si has puesto algo en desde cogera todas las fallas desde ese año
            if (anyoDesde == true && fallas.properties.anyo_fundacion_i > this.value) {

                crearDivs(fallas);

            }

            //Si has puesto algo en hasta cogera todas las fallas hasta ese año
            if (anyoHasta == true && fallas.properties.anyo_fundacion_i < this.value) {

                crearDivs(fallas);

            }


        }

    });
}


function quitarPalabras() {

    //si estas en el desde pone el booleando en true
    if (this.name == "filtroAñoDesde") {

        this.value = "";
        anyoDesde = true;
        //si estas en el hasta pone el booleando en true
    } else if (this.name == "filtroAñoHasta") {

        this.value = "";
        anyoHasta = true;
    }


}

//cada vez que se crea una falla hace esta funcion
function crearDivs(datosfallas) {

    //div principal
    let divPrincipal = document.querySelector("#principal");

    //div que contiene la falla
    let divFalla = document.createElement("div");
    
    //div del titulo
    let titulo = document.createElement("p");
    let divTitulo = document.createElement("div");
    divTitulo.classList.add("divTitulo");

    // div de la imagen
    let divImg = document.createElement("div");
    divImg.classList.add("divImg");
    let imagen = document.createElement("img");


    //div de la ubucacion y la puntuacion
    let divPuntuacion = document.createElement("div");
    divPuntuacion.classList.add("divPuntuacion");
    let boton = document.createElement("button");
    boton.setAttribute("value", "ubicacion");
    boton.innerText = "Ubicación";

    // creacion de las estrellas
    let formPuntuacion = document.createElement("form");
    let divClasificacion = document.createElement("p");
    divClasificacion.classList.add("clasificacion");
    
    for (let x = idLabelPtos, y = 5; x < idLabelPtos + 5; x++ , y--) {
        
        let inputEstrellas = document.createElement("input");
        inputEstrellas.setAttribute('id', 'radio' + x);
        inputEstrellas.setAttribute('type', 'radio');
        inputEstrellas.setAttribute('name', 'estrellas');
        inputEstrellas.setAttribute('value', y);
        divClasificacion.appendChild(inputEstrellas);

        let label = document.createElement('label');
        label.setAttribute('for', 'radio' + x);
        label.innerHTML = '★';
        divClasificacion.appendChild(label);

    }
    /*Incrementamos la variable global en 5 para que sean distintas la siguiente tanda de estrellas
    De no ser asi cuando pulsamos sobre una estrella con un id igual a otra aplica cambios a la que tiene
    mismo id*/
    idLabelPtos += 5;
    formPuntuacion.appendChild(divClasificacion);
    
    //elige cual de las dos es si es la infantil o la principal
    if (seccionPrincipalInfantil == true) {

        imagen.setAttribute("src", datosfallas.properties.boceto_i);

    } else {

        imagen.setAttribute("src", datosfallas.properties.boceto);
    }

    titulo.innerHTML = datosfallas.properties.nombre;

    //relacionadolos con los padres
    divTitulo.appendChild(titulo);
    divFalla.appendChild(divTitulo);
    
    divImg.appendChild(imagen);
    divFalla.appendChild(divImg);

    divPuntuacion.appendChild(boton);
    //evento que se le da a todos los botones de las fallas, esto es provisional
    boton.addEventListener('click', puntuacion);
    divPuntuacion.appendChild(formPuntuacion);
    divFalla.appendChild(divPuntuacion);

    divFalla.classList.add("falla");
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
        if (seccionPrincipalInfantil == true) {

            //buscas la falla 
            if (fallas.properties.seccion_i == seccionFalla) {

                // y la pones
                crearDivs(fallas);

            }

            // si la infantil es la seleccionada
        } else {

            //la buscas y la pones 
            if (fallas.properties.seccion == seccionFalla) {

                crearDivs(fallas);
            }
        }
    });

}

// seleccion de las fallas infantiles
function seleccionarInfantil() {

    let select = document.querySelector("select");

    select.innerHTML = "";
    seccionPrincipalInfantil = true;
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

    seccionPrincipalInfantil = false;
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

let idLabelPtos = 0;
let seccionPrincipalInfantil = false;
let datosJson;
let anyoDesde = false;
let anyoHasta = false;
let busqueda = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";
window.onload = init;