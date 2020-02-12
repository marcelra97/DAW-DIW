import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//boton de la busqueda de pokemons
class BotonBusqueda extends React.Component{
    render(){
        return(
            <button>Enviar</button>
        )
    }
}

//buscador de pokemons
class Select extends React.Component{
    render(){
        return(
            <input type="select"></input>
        )
    }

}



class Pokedex extends React.Component{
    render(){

        return(
            <div className="Buscador">
                <Select/>
                <BotonBusqueda/>
            </div>
           

            
        )
    }
}

ReactDOM.render(<Pokedex />, document.getElementById("root"));