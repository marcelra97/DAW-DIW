import React from 'react';


class Buscador extends React.Component{
    
    constructor(props){
        super(props);
        this.refBuscar = React.createRef();

    }


    cogerValue =() =>{

        let valor = this.refBuscar.current.value;
        
        this.props.onClick(valor);
    }



    render(){
        return(
            <div className="buscador">

                <div id="logo"></div>
                <div className="formulario">

                    <input ref={this.refBuscar} type="text" placeholder="Pokemon"></input>
                    <button onClick={this.cogerValue}>Buscar</button>
                    
                </div>
            </div>
        )
    }
}

export default Buscador;