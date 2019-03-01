import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';
// import { Redirect } from 'react-router-dom';

import './styles.css';

// import api from '../../services/api';
import { storagedTokenIsValid } from '../../services/token';

class Sala extends Component {

  async componentDidMount () {
    const isValid = await storagedTokenIsValid()
    if (!isValid) {
      console.log('Loga aí, né mano!')
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <Container>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Categorias</Form.Label>
          <Form.Control as="select">
            <option>Tecnologia</option>
            <option>Consultoria</option>
            <option>Engenharia</option>
          </Form.Control>
        </Form.Group>
      </Container>
    );
  }
}

export default Sala;
