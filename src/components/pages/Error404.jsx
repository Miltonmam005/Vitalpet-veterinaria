import { Container, Row, Col } from "react-bootstrap";
import "./Error404.css";
import "../../index.css";
import { Link } from "react-router";
import errorImagen from "../../assets/Error404Gat.jpg";

const Error404 = () => {
  return (
    <section className=" container-fluid bg-light text-dark">
      <Container className=" text-center py-5">
        <Row>
          <Col>
            <img
              src={errorImagen}
              alt="Pagina no encontrada"
              className="img-fluid errorImg mb-4"
            />
            <h2> Lo Siento pagina no encontrada</h2>
            <p>
              La pagina a la que intentaste acceder no existe o ha sido
              eliminada
            </p>
            <Link to="/" className=" btn btn-outline-primary">
              Volver al Inicio
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Error404;
