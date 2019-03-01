import React, { Component } from 'react';
import { Row, Form } from 'react-bootstrap';

import MenuSala from '../../components/MenuSala'
import Footer from '../../components/Footer'

import './styles.css';

// import api from '../../services/api';
import { storagedTokenIsValid } from '../../services/token';

class Sala extends Component {

  async componentDidMount() {
    const isValid = await storagedTokenIsValid()
    if (!isValid) {
      console.log('Loga aí, né mano!')
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Row>
          <MenuSala />
        </Row>
        <Row className="justify-content-center align-items-center" style={{ minHeight: (window.innerHeight - 200) }}>
          <Form.Group className="container" controlId="exampleForm.ControlSelect1">
            <Form.Label>Categorias</Form.Label>
            <Form.Control as="select">
              <option>Tecnologia</option>
              <option>Consultoria</option>
              <option>Engenharia</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Footer />
        </Row>
      </div>
    );
  }
}

export default Sala;
