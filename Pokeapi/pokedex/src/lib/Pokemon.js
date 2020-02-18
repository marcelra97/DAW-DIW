import React from 'react';

class Pokemon extends React.Component{

    constructor(props){
        super(props)

        this.state={
            nombre: null,
            sprite: null
        }
    }

    crearPokemon(){

        console.log(this.state.nombre);
        
        return(
        <div>
            <h1>{this.state.nombre}</h1>
        </div>
        

        )
    }

    
    async componentDidMount(){

        const response = await fetch(this.props.urlPokemon);
        const estadisticas = await response.json();

        //me guardo el nombre del pokemon
        this.state.nombre = estadisticas.name;
        //me guardo el sprite
        this.state.sprite = estadisticas.sprites.front_default;

        
    }
   
    render(){
         return(

            <div className="pokemon">
                
                {this.crearPokemon()}
            </div>

         )
    }

}

export default Pokemon;