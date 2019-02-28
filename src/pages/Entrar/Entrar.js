import React, { Component } from 'react';
import './styles.css';
import { Form, Button, FormText, Card } from 'react-bootstrap'


class Entrar extends Component {
  render() {
    return (
      <div className="container align-items-center mt-5 mb-5"   >
        <div className="row justify-content-center">
          <Card bg="light" style={{ width: '18rem' }} >

            <Form className="col-12">
              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label><b>Login</b></Form.Label>
                <Form.Control type="email" placeholder="Login" />

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
        <Form.Group controlId="SenhaEsquecida"className="justify-content-center align-items-center row">
              <FormText className="text-muted">
                <a href="/">Esqueceu a senha?</a></FormText>
                </Form.Group>
            </Form>

          </Card>
        </div>
      </div>

    );
  }
}


export default Entrar;
