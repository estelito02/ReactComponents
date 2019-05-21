import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Cabecalho from './Componentes/Cabecalho';
import Inicio from './Componentes/Inicio'
import Servicos from './Componentes/Servicos'
import Site from './Site';
import Rodape from './Componentes/Rodape';
import Portifolio from './Componentes/Portfolio'
import Precos from './Componentes/Precos'
import Contato from "./Componentes/Contatos";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />
        
        <Route path='/' exact component={Inicio} />
        <Route path='/Servicos' component={Servicos} />
        <Route path='/Portifolio' component={Portifolio} />
        <Route path='/Precos' component={Precos} />
        <Route path='/Contatos' component={Contato} />


              
        <Rodape />
      </div>
    </BrowserRouter>
  );
}

export default App;
