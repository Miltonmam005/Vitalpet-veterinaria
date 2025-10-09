import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router";
import "../Styles/login.css";
import icono from "../img/icono-veterinario.png";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    alert(`Bienvenido, ${data.email}! 🐾`);
  };

  return (
    <div className="login-wrapper">
      <Container fluid className="login-container">
        <Row className="g-0">
          <Col
            md={6}
            className="left-side d-none d-md-flex justify-content-center align-items-center"
          >
            <img
              src={icono}
              alt="Mascota veterinaria"
              className="login-icono"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="right-side d-flex align-items-center justify-content-center"
          >
            <div className="login-form w-100 px-4 px-md-5">
              <h2 className="login-title">Login</h2>
              <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className={`input-field ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    {...register("email", {
                      required: "El email es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Formato inválido",
                      },
                    })}
                  />
                  {errors.email && (
                    <Form.Text className="text-danger small">
                      {errors.email.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className={`input-field ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                      minLength: {
                        value: 6,
                        message: "Debe tener al menos 6 caracteres",
                      },
                    })}
                  />
                  {errors.password && (
                    <Form.Text className="text-danger small">
                      {errors.password.message}
                    </Form.Text>
                  )}
                </Form.Group>
                <Button
                  type="submit"
                  className="w-100 login-button fw-semibold py-2 mb-3"
                >
                  Ingresar
                </Button>
                <div className="login-links">
                  <p className="mb-1 text-muted small">
                    ¿Olvidaste tu contraseña?
                  </p>
                  <Button
                    variant="link"
                    className="p-0 m-0 text-success fw-semibold text-decoration-none"
                    as={Link}
                    to="/recuperar"
                  >
                    Recuperarla
                  </Button>
                </div>
                <div className="login-links mt-3">
                  <span className="text-muted small">¿No tienes cuenta?</span>{" "}
                  <Button
                    variant="link"
                    className="p-0 text-success fw-bold text-decoration-none"
                    as={Link}
                    to="/registro"
                  >
                    Registrarse
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
