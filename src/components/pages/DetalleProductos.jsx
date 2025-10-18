import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"; 

const DetalleProductos = ({ buscarProductos }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState({}); 

  useEffect(() => {
    if (id && buscarProductos) {
      const productoEncontrado = buscarProductos(id); 
      setProducto(productoEncontrado);
    }
  }, [id, buscarProductos]);

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
              src={producto.image}
              className="imagen-detalle-pelicula"
              alt={producto.alt} 
            />
          </Col>
          <Col sm={12} md={6} className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-evenly align-items-center">
                <Card.Title className="text-start Raleway display-5 my-lg-5">
                  {producto.title} 
                </Card.Title>
              </div>
              <hr />
              <div className="d-flex justify-content-evenly my-lg-5 border border-warning align-items-center my-3 py-2">
                <Card.Text className="text-center mb-0">
                  {producto.type || "Producto"} 
                </Card.Text>
              </div>
              <Card.Text className="tinos mb-lg-5">
                {producto.description_amplia || "Descripción no disponible"} 
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