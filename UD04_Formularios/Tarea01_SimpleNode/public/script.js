
function filtro(listaMonumentos) {
  
  //aqui me cojo la palabra
  let palabra = document.querySelector('[name="palabra"]').value; 

  //con el array de los monumentos que contienen la palabra busco el nombre de esta y solamente cojo las que empiecen por la palabra
   let filtroMonumentos = listaMonumentos.properties.nombre.startsWith(palabra.toUpperCase());

   //y las devuelvo
   return filtroMonumentos;
}

function busqueda (){

  let listado = document.createElement("ul");

  //no se como funciona fetch, solo se que hace cosas, preguntar a Angel como va esto o a mi lider natural Javi
    fetch(conexion)
  .then(response => response.json())
  .then(function(myJson) {
    
    //Aqui me da un array de todos los monumentos y utilizo el metodo filter del array 
    nombreMonumentos = myJson.features.filter(filtro);
    
    //recorro el array filtrado para poder mostrar todos los monumentos
    nombreMonumentos.forEach(monumentos => {

      let lista = document.createElement("li");

      lista.innerHTML = monumentos.properties.nombre;

      listado.appendChild(lista);

    });
  
    document.querySelector('#resultado').appendChild(listado);

});


}

function init() {

   document.querySelector('[name="busqueda"]').addEventListener('click', busqueda);
   
}

let nombreMonumentos;
const conexion =  "http://mapas.valencia.es/lanzadera/opendata/Monumentos-turisticos/JSON";
window.onload = init;