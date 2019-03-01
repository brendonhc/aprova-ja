import React, { Component } from 'react';
import './styles.css';
import { Row, Form, Button, FormText, Card } from 'react-bootstrap'

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import api from '../../services/api';
import { setStoragedToken, storagedTokenIsValid } from '../../services/token';

class Entrar extends Component {
  state = {
    email: '',
    password: '',
  }

  async componentDidMount() {
    const isValid = await storagedTokenIsValid()
    // Se já estiver logado, encaminha para a sala
    if (isValid) {
      console.log('Loga aí, né mano!')
      this.props.history.push("/sala")
    }
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    // Cancela o comportamento normal do submit para validarmos e enviarmos os dados
    const { email, password } = this.state

    if (!email || !password) {
      // Implementar validação
      // Pode ser um force submit do form que aí o html valida
      return
    }

    // Requisita o login para a api
    const response = await api.post('auth/login', { email, password })

    // Salva o token da sessão no cache do navegador
    await setStoragedToken(response.data.token)
    this.props.history.push("/sala")
  }

  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Menu />
        </Row>

        <Row className="justify-content-center align-items-center" style={{ minHeight: (window.innerHeight - 200) }}>
          <Card bg="light" style={{ width: '18rem' }} >

            <Form className="col-12" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" onChange={this.handleEmailChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label><b>Senha</b></Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" onChange={this.handlePasswordChange} />
              </Form.Group >
              <Form.Group controlId="LoginButton" className="justify-content-center align-items-center row mx-1" >
                <Button variant="primary" type="submit" block>
                  Entrar
                </Button>
              </Form.Group>
              <Form.Group controlId="SenhaEsquecida" className="justify-content-center align-items-center row">
                <FormText className="text-muted">
                  <a href="entrar#BoaSorte">Esqueceu a senha?</a></FormText>
              </Form.Group>
            </Form>

          </Card>
        </Row>

        <Row>
          <Footer />
        </Row>
      </div>

    );
  }
}

export default Entrar;
