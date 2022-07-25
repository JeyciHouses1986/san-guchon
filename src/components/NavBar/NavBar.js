import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget'

function NavBar() {
  return (
    <Navbar className="navbar navbar-dark bg-dark"  expand="lg">
      <Container>
        <Navbar.Brand href="#home">San Guchon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Los San Guchitos</Nav.Link>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Nav.Link href="#link"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

