import React, { Component } from 'react';
import './Cabecalho.css';
import vitas from './vitas.jpg';

class Cabecalho extends Component{

    render(){
        return ( 
            <header className="cabecalho">
                <img src={vitas}/>
                <h1>Oie!</h1>
            </header>
        );
    }
}

export default Cabecalho;