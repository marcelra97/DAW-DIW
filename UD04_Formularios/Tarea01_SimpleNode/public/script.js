function busqueda (){

    let lista = document.createElement('ul');

    fetch(conexion)
  .then(response => response.json())
  .then(function(myJson) {
    console.log(myJson);
    console.log(myJson.features);

});

}

function init() {
    document.querySelector('[name="busqueda"]').addEventListener('keyup', busqueda);
}

const conexion =  "http://mapas.valencia.es/lanzadera/opendata/Valenbisi/JSON";
window.onload = init;