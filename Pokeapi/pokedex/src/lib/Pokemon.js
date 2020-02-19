import React from 'react';

class Pokemon extends React.Component{

    constructor(props){
        super(props)

        this.state={
            nombre: null,
            sprite: null,
           
        }
    }

    crearPokemon(){

        return(

        <div className="pokemon">
            <h1>{this.state.nombre}</h1>
            <img src={this.state.sprite} ></img>
        </div>
    
        )
    }

    async recogerPokemon(){

        console.log("recojo");
        const response = await fetch(this.props.urlPokemon);
        const estadisticas = await response.json();
        
        //me guardo el nombre del pokemon y me guardo el sprite
        this.setState({nombre: estadisticas.name, sprite: estadisticas.sprites.front_default, primeraCarga: true});
        
      
        prevProps  = this.props.urlPokemon
       

    }

    async componentDidMount(){

        console.log("didMount");
        
        this.recogerPokemon();
    
    }

    //esto mira si el componente ha sido actualizado
    
    shouldComponentUpdate(){
       
        
        if(this.props.urlPokemon !== prevProps){
    
            console.log("comprobacion verdadera");

            console.log(this.props.urlPokemon);

            return true;

        }else{

            console.log("comprobacion falsa");

            console.log(this.props.urlPokemon);
            return false;
        }
    }

    //si devuelve true entra
    componentDidUpdate(){

        console.log("Actualizado");
        
        if(this.state.primeraCarga){
            this.recogerPokemon();
        }
       
        
    }
   
    render(){

    
        return(

            <div className="divPokemon">
                {this.crearPokemon()}
            </div>

         )

    }
    
}

let prevProps
export default Pokemon;