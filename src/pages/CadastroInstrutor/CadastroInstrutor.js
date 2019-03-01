import React, { Component } from 'react';
import './styles.css';
import { Row, Form, Button, Card } from 'react-bootstrap'

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import { storagedTokenIsValid } from '../../services/token'

import api from '../../services/api';

class CadastroInstrutor extends Component {
  state = {
    nome: '',
    email: '',
    password: '',
    cpf: '',
    telefone: '',
    descricao: '',
    taxa: '',
    categorias: []
  }

  async componentDidMount() {
    const isValid = await storagedTokenIsValid()
    // Se já estiver logado, encaminha para a sala
    if (isValid) {
      console.log('Loga aí, né mano!')
      this.props.history.push("/sala")
    }
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

  handleCheckBoxChange = event => {
    var { categorias } = this.state;
    if(event.target.checked) {
      categorias.push(event.target.value);
      this.setState({ categorias: categorias});
    } else {
      var index = categorias.indexOf(event.target.value);
      categorias.splice(index, 1)
      this.setState({ categorias: categorias});
    }

    console.log(this.state.categorias);
  }

  handleSubmit = async event => {
    // Cancela o comportamento normal do submit para validarmos e enviarmos os dados
    event.preventDefault()

    const { nome, email, password, cpf, telefone, descricao, taxa, categorias } = this.state

    var sendJson = {
      nome: nome,
      email: email,
      password: password,
      cpf: cpf,
      telefone: telefone,
      descricao: descricao,
      taxa: taxa, 
      categorias: categorias
    };

    // Requisita o login para a api
    const response = await api.post('instrutores', sendJson);

    // Salva o token da sessão no cache do navegador
    await localStorage.setItem('@AprovaJa:token', response.data.data.user.stsTokenManager.accessToken)
    this.props.history.push('/sala');
  }

  render() {
    return (
      <div className="container-fluid justify-content-center align-items-center">
        <Row>
          <Menu />
        </Row>

        <Row className="justify-content-center align-items-center" style={{ minHeight: (window.innerHeight - 200) }}>
          <Card bg="light" style={{ width: '46rem', padding: '2rem'}} >

            <Form className="col-12 d-flex" style={{flexDirection: "column"}} onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <Form.Group controlId="formBasicName">
                    <Form.Label><b>Nome</b></Form.Label>
                    <Form.Control size="sm" placeholder="Digite seu nome" onChange={this.handleNameChange}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mt-3">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control size="sm" type="email" placeholder="Digite seu email" onChange={this.handleEmailChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label><b>Senha</b></Form.Label>
                    <Form.Control size="sm" type="password" placeholder="Digite sua senha" onChange={this.handlePasswordChange} />
                  </Form.Group >
                  <Form.Group controlId="formBasicCpf">
                    <Form.Label><b>CPF</b></Form.Label>
                    <Form.Control size="sm" placeholder="Digite seu CPF" onChange={this.handleCPFChange} />
                  </Form.Group >
                  <Form.Group>
                    <Form.Label><b>Categorias</b></Form.Label><br/>
                    <Form.Check onChange={this.handleCheckBoxChange} inline label="Entrevistas" value="Entrevistas"/>
                    <Form.Check onChange={this.handleCheckBoxChange} inline label="Dinâmicas" value="Dinâmicas"/>
                    <Form.Check onChange={this.handleCheckBoxChange} inline label="Tecnologia" value="Tecnologia"/>
                    <Form.Check onChange={this.handleCheckBoxChange} inline label="Saúde" value="Saúde"/>
                    <Form.Check onChange={this.handleCheckBoxChange} inline label="Administração" value="Administração"/>
                    <Form.Check onChange={this.handleCheckBoxChange} inline label="Recursos Humanos" value="Recursos Humanos"/>
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group controlId="formBasicTelefone">
                    <Form.Label><b>Telefone</b></Form.Label>
                    <Form.Control size="sm" placeholder="Digite seu telefone" onChange={this.handleTelefoneChange}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicDescricao" className="mt-3">
                    <Form.Label><b>Descrição</b></Form.Label>
                    <Form.Control size="sm" as="textarea" rows="5" placeholder="Insira uma descrição sobre você e suas habilidades" onChange={this.handleDescricaoChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicTaxa">
                    <Form.Label><b>Taxa</b></Form.Label>
                    <Form.Control size="sm" placeholder="Valor por hora/aula" onChange={this.handleTaxaChange} />
                  </Form.Group >
                  
                </div>
              </div>
              <div className="row justify-content-end">
                <Form.Group controlId="SignUpButton" className="justify-content-center align-items-center row mx-1" >
                  <Button variant="primary" type="submit" block>
                    Cadastrar
                  </Button>
                </Form.Group>
              </div>
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

export default CadastroInstrutor;