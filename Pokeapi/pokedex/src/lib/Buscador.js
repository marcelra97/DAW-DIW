import React from 'react';


class Buscador extends React.Component{
    

    render(){
        return(
            <div className="buscador">

                <div id="logo"></div>
                <div className="formulario">

                    <input type="text" placeholder="Pokemon"></input>
                    <button>Buscar</button>
                    
                </div>
            </div>
        )
    }
}

export default Buscador;