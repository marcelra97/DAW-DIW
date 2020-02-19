import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Buscador from './lib/Buscador';
import Resultado from './lib/Resultado';


class Pokedex extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {

            json: null,
            busquedaPokemon:[],
            valorInput: null
        }
    }
   
    componentDidMount(){
        
        let url = "https://pokeapi.co/api/v2/pokemon?limit=1000";

        fetch(url)
        .then(response => response.json()) 
        .then(myJson =>  {
            
            
            this.setState({json : myJson});
            
        }) 
         

    }
    
    buscarPokemon  = (valor) =>{

        console.log(valor);

        let pokemones = this.state.json.results;

        //console.log(pokemones)

        if(valor !== ""){

            let arrayPokemon = new Array;

            pokemones.forEach(pokemon => {
                
                
                 
                if(pokemon.name == valor){
                    
                    arrayPokemon.push(pokemon)
                    this.setState({busquedaPokemon: arrayPokemon}) 

                }else{

                    
                }             
               
                
                
            });

            
        }

    }
        

    render(){

        return(

            <div className="pokedex">

                <Buscador onClick={this.buscarPokemon} />

                <Resultado resultado={this.state.busquedaPokemon} />
                
            </div>

            
        )
    }
}

ReactDOM.render(<Pokedex />, document.getElementById("root"));