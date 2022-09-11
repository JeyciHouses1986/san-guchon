import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget'
import './navbar.css'

export default function NavBar() {
  return (
    
    <Navbar className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light"  expand="lg">
      <Container>
      <img className='imagen-logo' src="../imagenes/san-guchon-logo.png" alt="..." />
        <Nav.Link className="loguito" as={Link} to={'/'}>San Guchon</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to={'/category/1'}>Milagros</Nav.Link>
            <Nav.Link as={Link} to={'/category/2'}>Pecados</Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



