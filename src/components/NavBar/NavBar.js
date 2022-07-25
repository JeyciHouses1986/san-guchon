import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget'

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="#home">San Guchon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white" href="#link">Los San Guchitos</Nav.Link>
            <Nav.Link className="text-white" href="#link">Sobre Nosotros</Nav.Link>
            <Nav.Link className="text-white" href="#link">Contacto</Nav.Link>
            <Nav.Link className="text-white" href="#link"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

