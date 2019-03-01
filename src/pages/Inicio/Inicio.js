import React, { Component } from 'react';
import './styles.css';
import { Row, Button } from 'react-bootstrap';
import background from '../../img/background.png'

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import { storagedTokenIsValid } from '../../services/token'

class Inicio extends Component {
  async componentDidMount () {
    const isValid = await storagedTokenIsValid()
    // Se já estiver logado, encaminha para a sala
    if (isValid) {
      console.log('Loga aí, né mano!')
      this.props.history.push("/sala")
    }
  }

  render() {
    var divStyle = {
      textAlign: "center",
      padding: 0,
      backgroundSize: "cover",
      backgroundImage: "url("+background+")",
      minHeight: window.innerHeight - 200,
      flexDirection: "column"
    };

    return (
      <div className="container-fluid">
      <Row>
        <Menu />
      </Row>

      <Row>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={divStyle}>
          <h1 className="text-light text-uppercase text-bold mt-auto">E se conseguir um emprego <br />fosse mais fácil?</h1>
          <h6 className="text-light">Com o Aprova Já, isso pode ser uma realidade!</h6>
          <div>
            <Button href="/cadastro-aluno" size="lg" className="mr-3" variant="success">Seja um aluno</Button>
            <Button href="/cadastro-instrutor"size="lg" variant="secondary">Seja um instrutor</Button>
          </div>
          <div style={{cursor: "pointer"}} className="mt-auto">
            <h6 className="mt-auto">Saiba mais</h6>
            <i class="fas fa-arrow-down fa-2x mb-5"></i>
          </div>
          
      </div>
      </Row>

      <Row>
        <Footer />
      </Row>
      </div>
    );
  }
}

export default Inicio;
