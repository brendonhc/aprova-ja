import React, { Component } from 'react';
import './styles.css';
import { Form, Button, Card } from 'react-bootstrap'

import api from '../../services/api';

class Cadastro extends Component {
  state = {
    nome: '',
    email: '',
    password: '',
  }

  handleNameChange = event => {
    this.setState({ nome: event.target.value });
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = async event => {
    // Cancela o comportamento normal do submit para validarmos e enviarmos os dados
    event.preventDefault()

    const { nome, email, password } = this.state

    // Requisita o login para a api
    const response = await api.post('alunos', { nome, email, password })

    // Salva o token da sessão no cache do navegador
    await localStorage.setItem('@AprovaJa:token', response.data.data.user.stsTokenManager.accessToken)
    console.log(response)
  }

  render() {
    return (
      <div className="container justify-content-center align-items-center mt-5 mb-5">
        <div className="row justify-content-center align-items-center">
          <Card bg="light" style={{ width: '18rem' }} >

            <Form className="col-12" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label><b>Nome</b></Form.Label>
                <Form.Control placeholder="Digite seu nome" onChange={this.handleNameChange}/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" onChange={this.handleEmailChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label><b>Senha</b></Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" onChange={this.handlePasswordChange} />
              </Form.Group >
              <Form.Group controlId="SignUpButton" className="justify-content-center align-items-center row mx-1" >
                <Button variant="primary" type="submit" block>
                  Cadastrar
                </Button>
              </Form.Group>
            </Form>

          </Card>
        </div>
      </div>

    );
  }
}

export default Cadastro;
