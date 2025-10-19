import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/register.css";
import icono from "../img/icono-veterinario.png";
import Swal from "sweetalert2";
import { crearUsuario } from "../../helpers/queries";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const crearCuenta = async (usuario) => {
    try {
      const respuesta = await crearUsuario(usuario);
      if (respuesta?.status === 201) {
        Swal.fire({
          title: "Usuario creado",
          text: `El usuario ${usuario.nombreUsuario} fue creado correctamente.`,
          icon: "success",
        });
        navigate("/login");
        reset();
      } else {
        const mensajeError = await respuesta.json();
        Swal.fire({
          title: "Error al crear usuario",
          text: mensajeError.message || "El email ya está en uso.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error del servidor",
        text: "Ocurrió un problema inesperado. Intenta en unos minutos.",
        icon: "error",
      });
    }
  };

  return (
    <Container fluid className="register-container">
      <div className="register-wrapper">
        <Row className="g-0">
          <Col
            md={6}
            className="left-side d-none d-md-flex justify-content-center align-items-center"
          >
            <img
              src={icono}
              alt="Mascota veterinaria"
              className="register-icono"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="right-side d-flex align-items-center justify-content-center"
          >
            <div className="register-form w-100 px-4 px-md-5">
              <h2 className="register-title text-center mb-4">Crear cuenta</h2>

              <Form onSubmit={handleSubmit(crearCuenta)}>
                <Form.Group className="mb-3" controlId="nombreUsuario">
                  <Form.Label>Nombre de usuario *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Juan Pérez"
                    className={`input-field ${
                      errors.nombreUsuario ? "is-invalid" : ""
                    }`}
                    {...register("nombreUsuario", {
                      required: "El nombre es obligatorio",
                      minLength: {
                        value: 2,
                        message: "Debe tener como mínimo 2 caracteres",
                      },
                      maxLength: {
                        value: 50,
                        message: "Debe tener como máximo 50 caracteres",
                      },
                    })}
                  />
                  {errors.nombreUsuario && (
                    <Form.Text className="text-danger small">
                      {errors.nombreUsuario.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Correo electrónico *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ej: ejemplo@correo.com"
                    className={`input-field ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    {...register("email", {
                      required: "El email es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Formato de email inválido",
                      },
                    })}
                  />
                  {errors.email && (
                    <Form.Text className="text-danger small">
                      {errors.email.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Contraseña *</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="ej: Pass1234*"
                    className={`input-field ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                        message:
                          "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula, una mayúscula y un caracter no alfanumérico.",
                      },
                    })}
                  />
                  {errors.password && (
                    <Form.Text className="text-danger small">
                      {errors.password.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmarPassword">
                  <Form.Label>Confirmar contraseña *</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Vuelve a escribir tu contraseña"
                    className={`input-field ${
                      errors.confirmarPassword ? "is-invalid" : ""
                    }`}
                    {...register("confirmarPassword", {
                      required: "Debes confirmar la contraseña",
                      validate: (value) =>
                        value === watch("password") ||
                        "Las contraseñas no coinciden",
                    })}
                  />
                  {errors.confirmarPassword && (
                    <Form.Text className="text-danger small">
                      {errors.confirmarPassword.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 register-button fw-semibold py-2 mb-3"
                >
                  Registrarse
                </Button>

                <div className="register-links d-flex justify-content-center align-items-center gap-1">
                  <span className="text-muted small">¿Ya tienes cuenta?</span>
                  <Button
                    variant="link"
                    className="p-0 text-success fw-bold text-decoration-none"
                    as={Link}
                    to="/login"
                  >
                    Iniciar sesión
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
