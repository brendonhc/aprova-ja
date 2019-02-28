import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Footer from './components/Footer';

import Entrar from './pages/Entrar';
import Cadastro from './pages/Cadastro';
import Classe from './pages/Classe';
import Inicio from './pages/Inicio';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />

        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/entrar" component={Entrar} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/classe" component={Classe} />
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
