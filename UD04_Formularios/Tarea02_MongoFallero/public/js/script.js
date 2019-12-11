function mostrarFallas() {

    fetch(busqueda)
        .then(respuesta => respuesta.json())
        .then(datos => {

            let divPrincipal = document.querySelector("#principal");
            console.log(datos.features);

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

        })
}

function init() {

    mostrarFallas();

    document.querySelector('input[name="secciones"]');

}


let busqueda = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";
window.onload = init;