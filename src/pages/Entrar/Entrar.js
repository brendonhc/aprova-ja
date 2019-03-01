import React, { Component } from 'react';
import './styles.css';
import { Form, Button, FormText, Card } from 'react-bootstrap'

import api from '../../services/api';
import { setStoragedToken } from '../../services/token';

class Entrar extends Component {
  state = {
    email: '',
    password: '',
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
      <div className="container justify-content-center align-items-center mt-5 mb-5">
        <div className="row justify-content-center align-items-center">
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
        </div>
      </div>

    );
  }
}

export default Entrar;
