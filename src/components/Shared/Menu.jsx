
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return ( <>
    <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand href="#">VitalPet</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Loguin</Nav.Link>
            <Nav.Link href="#action3">Registro</Nav.Link>
            <Nav.Link href="#action4">Solicitar Turno</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>    
    );
};

export default Menu;