import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Footer from './components/Footer';

import Entrar from './pages/Entrar';
import Cadastro from './pages/Cadastro';
import Classe from './pages/Classe';
import Inicio from './pages/Inicio';
import CadastroInstrutor from './pages/CadastroInstrutor';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <header className="row">
          <Menu />
        </header>
        <main className="row justify-content-center align-items-center" style={{ minHeight: (window.innerHeight-200)} }>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Inicio} />
              <Route path="/entrar" component={Entrar} />
              <Route path="/cadastro-aluno" component={Cadastro} />
              <Route path="/classe" component={Classe} />
              <Route path="/cadastro-instrutor" component={CadastroInstrutor} />
            </Switch>
          </BrowserRouter>
        </main>
        <footer className="row">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
