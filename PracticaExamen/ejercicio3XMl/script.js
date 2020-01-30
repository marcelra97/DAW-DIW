function cargaXML() {
    
    //recoger el xml de un php

    let url = "texto.";

    fetch(url)
    .then(response =>{
        //la respuest sera un tipo txt
        return response.text();
    })

    // en esta promesa se hace el parse del texto recogido 
    .then(xml => (new window.DOMParser()).parseFromString(xml, "text/xml"))
    
    // y luego el xml puede cambiarlo
    .then(data => {

        tratarXML(data)

    });

}

function tratarXML(xml) {
    
    let etiqueta = xml.getElementsByTagName("from");
    console.log(etiqueta[0])
}

function init (){
    cargaXML();
}

window.onload = init;
