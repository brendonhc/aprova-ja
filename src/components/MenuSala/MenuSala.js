import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../img/AprovaJáWhite.png'

import { cleanStoragedToken } from '../../services/token'

class MenuSala extends Component {
  
  exitHandler = async() => {
    await cleanStoragedToken()
    window.location = await "/"
  }

  render() {
    return (
      <Navbar className="container-fluid" bg="primary" expand="lg" inline variant="dark">
        <Navbar.Brand href="/" >
          <img width="150px" src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" inline />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-4">
            <Nav.Link href="#ajuda" >Ajuda </Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={this.exitHandler} >Sair</Button>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}

export default MenuSala;