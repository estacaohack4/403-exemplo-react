import React, { Component } from 'react';
import Cabecalho from './Cabecalho';
import Foto from './Foto';

class App extends Component {
  render() {
    return (
      <div>
        <Cabecalho/>
        <Foto imagem="https://images.encyclopediadramatica.rs/thumb/0/01/UgandaKnuckles.jpg/300px-UgandaKnuckles.jpg" nome="Quinocous" />
        <Foto imagem="https://images02.military.com/sites/default/files/styles/full/public/media/veteran-jobs/content-images/2016/03/chucknorris.jpg?itok=_J3M4O-S" nome="Chuck Norra"/>
  
      </div>
    );
  }
}

export default App;
