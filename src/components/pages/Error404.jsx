import { Container, Row, Col } from "react-bootstrap";
import errorImage from "../assets/errorgat.404.jpg"; 
import "../../index.css";
import { Link } from "react-router-dom"; 

const Error404 = () => {
  return (
    <section className="container-fluid bg-light text-dark">
      <Container className="text-center py-5">
        <Row>
          <Col>
            <img
              src={errorImage} 
              alt="Página no encontrada"
              className="img-fluid errorImg mb-4"
            />
            <h2>Lo sentimos, página no encontrada</h2>
            <p>
              La página a la que intentaste acceder no existe o ha sido
              eliminada
            </p>
            <Link to="/" className="btn btn-outline-success">
              Volver al Inicio
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Error404;