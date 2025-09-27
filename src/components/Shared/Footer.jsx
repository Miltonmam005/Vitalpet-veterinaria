import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

function Footer() {
return (
    <footer className="colorFoter text-center text-lg-startp-3">
      <Container className="text-center text-white">
        <Row>
              <Col
            md={4}
            className="mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start"
          >
            <h1 className="titulofoter">VitalPet</h1>
            <p className="m-0 textocolor">
              &copy; Xtream. Todos los derechos reservados.
            </p>
          </Col>
            <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase titulofoter fw-bold mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className='textocolor'>
                Contacto
              </li>
              <li className='textocolor'>
                Acerca de nosotros
              </li>
              <li className='textocolor'>
                Subscripciones 
              </li>
              <li className='textocolor'>
               Contenido Premium
              </li>
            </ul>
          </Col>
       
          <Col md={4}>
            <h5 className="text-uppercase titulofoter fw-bold mb-3">Síguenos</h5>
            <div className="d-flex justify-content-center justify-content-md-start textocolor">
              <a href="https://facebook.com/Xtream" target="_blank" rel="noopener noreferrer" className="text-reset me-3 footer-icon-link">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://twitter.com/Xtream" target="_blank" rel="noopener noreferrer" className="text-reset me-3 footer-icon-link">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="https://instagram.com/Xtream" target="_blank" rel="noopener noreferrer" className="text-reset me-3 footer-icon-link">
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

