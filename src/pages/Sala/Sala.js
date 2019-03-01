import React, { Component } from 'react';
import { Card, Button, Row, Form } from 'react-bootstrap';

import MenuSala from '../../components/MenuSala'
import Footer from '../../components/Footer'

import './styles.css';

// import api from '../../services/api';
import { storagedTokenIsValid, getStoragedToken } from '../../services/token';
import api from '../../services/api';

class Sala extends Component {

  state = {
    instrutores: []
  }

  handleChangeCategoria = event => {
    const token = getStoragedToken();
    api.get('instrutores/?categoria='+event.target.value+'&token='+token)
      .then(response => {
        const instrutores = response.data.data;
        this.setState({ instrutores: instrutores });
      });
  }

  async componentDidMount() {
    const isValid = await storagedTokenIsValid()
    if (!isValid) {
      console.log('Loga aí, né mano!')
      this.props.history.push("/")
    }

    const token = getStoragedToken();
    const response = await api.get('instrutores/?token='+token);

    await this.setState({instrutores: response.data.data});
  }

  render() {
    const instList = this.state.instrutores.map((instrutor) => 
      <Card className="m-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{instrutor.nome}</Card.Title>
          <Card.Text>
            {instrutor.descricao}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )

    return (
      <div className="container-fluid">
        <Row>
          <MenuSala />
        </Row>
        <Row className="justify-content-center align-items-center">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Categorias</Form.Label>
            <Form.Control onChange={this.handleChangeCategoria} as="select">
              <option>Tecnologia</option>
              <option>Saúde</option>
              <option>Administração</option>
              <option>Recursos Humanos</option>
              <option>Entrevistas</option>
              <option>Dinâmicas</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <Row className="justify-content-center">
          {instList}
        </Row>
        <Row>
          <Footer />
        </Row>
      </div>
    );
  }
}

export default Sala;
