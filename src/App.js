import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Entrar from './pages/Entrar';
import Cadastro from './pages/Cadastro';
import CadastroInstrutor from './pages/CadastroInstrutor';
import Sala from './pages/Sala';
import Inicio from './pages/Inicio';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/entrar" component={Entrar} />
        <Route path="/cadastro-aluno" component={Cadastro} />
        <Route path="/cadastro-instrutor" component={CadastroInstrutor} />
        <Route path="/sala" component={Sala} />
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
