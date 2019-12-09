
function filtro(listaMonumentos) {
  
  //aqui me cojo la palabra
  let palabra = document.querySelector('[name="palabra"]').value; 

  //con el array de los monumentos que contienen la palabra busco el nombre de esta y solamente cojo las que empiecen por la palabra
   let filtroMonumentos = listaMonumentos.properties.nombre.startsWith(palabra.toUpperCase());

   //y las devuelvo
   return filtroMonumentos;
}

function busqueda (){

  //me creo el ul para poner la lista
  let listado = document.createElement("ul");

  //no se como funciona fetch, solo se que hace cosas, preguntar a Angel como va esto o a mi lider natural Javi
    fetch(conexion)
  .then(response => response.json())
  .then(function(myJson) {
    
    //Aqui me da un array de todos los monumentos y utilizo el metodo filter del array 
    nombreMonumentos = myJson.features.filter(filtro);
    
    //recorro el array filtrado para poder mostrar todos los monumentos
    nombreMonumentos.forEach(monumentos => {
      //me creo un li
      let lista = document.createElement("li");
      
      // y añado el nombre de cada monumento en la lista
      lista.innerHTML = monumentos.properties.nombre;

      //y los añado al listado
      listado.appendChild(lista);

    });
  
});

//añado la lista al resultado
document.querySelector('#resultado').appendChild(listado);


}

function init() {

   document.querySelector('[name="busqueda"]').addEventListener('click', busqueda);
   
}

let nombreMonumentos;
const conexion =  "http://mapas.valencia.es/lanzadera/opendata/Monumentos-turisticos/JSON";
window.onload = init;