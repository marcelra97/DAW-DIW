window.onload= function(){
    //llamo a la funcion
    pulsarBoton();
}

function pulsarBoton(){
    //hago un querySelector del boton y le añado un eventListener que llama a la transicion
    document.querySelector("button").addEventListener("click", transicionImagen);

}

function transicionImagen(){
    //me guardo en un array todos los elementos que tenga la clase caja
    const keys = document.querySelectorAll(".caja")
    
    //y hago un foreach para recorer cada una y les añado o les quito las clase movimiento
    keys.forEach(caja => caja.classList.toggle("movimiento"));
}