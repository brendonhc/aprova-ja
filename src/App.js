import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Entrar from './pages/Entrar';
import Cadastro from './pages/Cadastro';
import Classe from './pages/Classe';
import Inicio from './pages/Inicio';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h5>Aqui vai o Header</h5>
        </header>

        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/entrar" component={Entrar} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/classe" component={Classe} />
          </Switch>
        </BrowserRouter>

        <footer>
          <h5>Aqui Vai o Footer</h5>
        </footer>
      </div>
    );
  }
}

export default App;
