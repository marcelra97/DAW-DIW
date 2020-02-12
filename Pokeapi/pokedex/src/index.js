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
            <input type="text"></input>
        )
    }

}

class Buscador extends React.Component{
    render(){
        return(
            <div className="buscador">
                <h1></h1>
                <Select />
                <BotonBusqueda />
            </div>
        )
    }
}

class Resultado extends React.Component{

    render(){
        return(
           <div className="resultado">

           </div>
        )
    }

}

class Pokedex extends React.Component{
    
    componentDidMount(){
        
        let url = "https://pokeapi.co/api/v2/pokedex/1";

        fetch(url)
        .then(response => response.json()) 
        .then(myJson =>  console.log(myJson)) 
         

    }
    
    render(){

        return(

            <div className="Pokedex">

                <Buscador />

                <Resultado />
                
            </div>

            
        )
    }
}

ReactDOM.render(<Pokedex />, document.getElementById("root"));