import { useEffect, useState } from "react";
import { Container, Card, Row, Col, CardText } from "react-bootstrap";
import { Link, useParams } from "react-router";

const DetalleProductos = ({ buscarProductos }) => {
  const { id } = useParams();
  const [Producto, setProductos] = useState({});

  useEffect(() => {
    const ProductoEncontrados = buscarProductos(id);
    setProductos(ProductoEncontrados);
  }, []);

  return (
    <Container className="my-3">
      <Link className="text-decoration-none text-success-emphasis" to={"/"}>
        <i className="bi bi-arrow-left mx-2"></i>Volver
      </Link>
      <Card className="my-3" border="success">
        <Row>
          <Col sm={12} md={6}>
            <Card.Img
              variant="top"
              src={Producto.image}
              className="imagen-detalle-pelicula"
              alt={Producto.alt}
            />
          </Col>
          <Col sm={12} md={6} className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-evenly align-items-center">
                <Card.Title className="text-start Raleway display-5 my-lg-5">
                  {Producto.title}
                </Card.Title>
              </div>
              <hr />
              <div className="d-flex justify-content-evenly my-lg-5 border border-warning align-items-center my-3 py-2">
                <Card.Text className="text-center mb-0">
                  {Producto.genre}
                </Card.Text>
              </div>
              <Card.Text className="tinos mb-lg-5">
                {Producto.description_amplia}
              </Card.Text>
              <Link className="btn btn-success w-100 mb-lg-5" to="/Error404">
                Comprar
              </Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProductos;