import React, {Component} from 'react';

class Foto extends Component{
    componentWillMount(){
        console.log(this.props);
        this.nome = this.props.nome.toUpperCase();
    }

    componentDidMount(){
        console.log('apareci!');
    }

    render(){
        return (
            <div>
                <img src={this.props.imagem}/>
                <p>{this.nome}</p>
            </div>
        );
    }
}

export default Foto;