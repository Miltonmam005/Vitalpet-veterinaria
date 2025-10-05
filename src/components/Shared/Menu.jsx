
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return ( <>
    <Navbar expand="lg" className="bg-body-tertiary colorNav" bg="light" data-bs-theme="light">
      <Container fluid >
            <Nav.Link href="./index.html">
              <img
                className="d-inline-block m-lg-1 align-top stiloLogoNav"
                alt="logo Veterinaria"
                src="/LogoVet.png"
                width="50"
                height="50"
              />
            </Nav.Link>
        <Navbar.Brand href="/index.html" className="fuenteLogo color-logo-nav fuentetextos">VitalPet</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='fuentetextos' href="./index.html">Inicio</Nav.Link>
            <Nav.Link className='fuentetextos' href="./pages/Error404.jsx">Login</Nav.Link>
            <Nav.Link className='fuentetextos' href="/">Solicitar Turno</Nav.Link>
            {/* logo del carrito */}
             <Nav.Link href="#"> {/* carrito */}
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat.png"
                width="30"
                height="30"
                className="d-inline-block align-top logoCarrito"
                alt="Logo de carrito"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>    
    );
};

export default Menu;