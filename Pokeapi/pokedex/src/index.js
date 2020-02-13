import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Buscador from './lib/Buscador'

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

            <div className="pokedex">

                <Buscador />

                <Resultado />
                
            </div>

            
        )
    }
}

ReactDOM.render(<Pokedex />, document.getElementById("root"));