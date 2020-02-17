import React from 'react';
import Pokemon from './Pokemon';


class Resultado extends React.Component{
 
    
    crearDivs(){

      let vacio =  this.comprobarVacio();

        if(!vacio){
           let tamañoArray = this.props.resultado.length;

           
            for (let i = 0; i < tamañoArray; i++) {
               
               console.log( this.props.resultado[i].name);
               
            }
            //return <Pokemon />
        }
        
        
    }

    comprobarVacio(){

        if(this.props.resultado.length === 0){

            return true;

        }else{

            return false;            

        }

       
       
    }
    render(){
        return(

           <div className="resultado">
               {this.crearDivs()} 
           </div>
        )
    }

}

export default Resultado;