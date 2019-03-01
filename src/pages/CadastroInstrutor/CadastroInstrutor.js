import React, { Component } from 'react';
import './styles.css';
import { Form, Button, Card } from 'react-bootstrap'

import api from '../../services/api';

class CadastroInstrutor extends Component {
  state = {
    nome: '',
    email: '',
    password: '',
    cpf: '',
    telefone: '',
    descricao: '',
    taxa: ''
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

  handleCPFChange = event => {
    this.setState({ cpf: event.target.value });
  }

  handleTelefoneChange = event => {
    this.setState({ telefone: event.target.value });
  }

  handleDescricaoChange = event => {
    this.setState({ descricao: event.target.value });
  }

  handleTaxaChange = event => {
    this.setState({ taxa: event.target.value });
  }

  handleSubmit = async event => {
    // Cancela o comportamento normal do submit para validarmos e enviarmos os dados
    event.preventDefault()

    const { nome, email, password, cpf, telefone, descricao, taxa } = this.state

    // Requisita o login para a api
    const response = await api.post('instrutores', { nome, email, password, cpf, telefone, descricao, taxa })

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
              <Form.Group controlId="formBasicCpf">
                <Form.Label><b>CPF</b></Form.Label>
                <Form.Control placeholder="Digite seu CPF" onChange={this.handleCPFChange} />
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

export default CadastroInstrutor;