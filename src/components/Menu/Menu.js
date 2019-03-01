import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../img/AprovaJáWhite.png'


class Menu extends Component {
  render() {
    return (
      <Navbar className="container-fluid" bg="primary" expand="lg" inline variant="dark">
        <Navbar.Brand href="/" >
          <img width="150px" src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" inline />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-4" >
            <Nav.Link href="/#ajuda">Ajuda </Nav.Link>
            <Nav.Link href="/#sobre">Saiba Mais </Nav.Link>
          </Nav>
          <Button variant="outline-light" href="/entrar" >Login</Button>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}

export default Menu;