import React, { Component } from 'react';
import './styles.css';
import { Form, Button, FormText, Card, FormCheck } from 'react-bootstrap'

class Cadastro extends Component {
  render() {
    return (
      <div className="container align-items-center mt-5 mb-5"   >
        <div className="row justify-content-center">
          <Card bg="light" style={{ width: '18rem' }} >
          <Card.Header><b><h4>Cadastro</h4></b></Card.Header>

            <Form className="col-12">
              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label><b>Nome</b></Form.Label>
                <Form.Control type="text" placeholder="Nome" required />

              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label><b>Email</b></Form.Label>
                <Form.Control type="email" placeholder="Email" required />

              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label><b>Senha</b></Form.Label>
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group >
              <Form.Group controlId="LoginButton" className="justify-content-center align-items-center row" >
                <Button variant="primary" type="submit"  >
                  Entrar
      </Button>
              </Form.Group>
              {['checkbox'].map(type => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check required
                    type={type}
                    id={`default-${type}`}
                    label={`Li os termos de uso e aceito`}></Form.Check>
                  
                </div>
              ))}
            </Form>

          </Card>
        </div>
      </div>

    );
  }
}

export default Cadastro;
