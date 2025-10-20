import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary colorNav"
        bg="light"
        data-bs-theme="light"
      >
        <Container fluid>
          <NavLink to="/" className="nav-link">
            <img
              className="d-inline-block m-lg-1 align-top stiloLogoNav"
              alt="logo Veterinaria"
              src="./LogoVet.png"
              width="50"
              height="50"
            />
          </NavLink>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="fuenteLogo color-logo-nav fuentetextos"
          >
            VitalPet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/" className="fuentetextos">
                Inicio
              </Nav.Link>

              {usuarioAdmin ? (
                <>
                  <Nav.Link
                    as={NavLink}
                    to="/administrador"
                    className="fuentetextos"
                  >
                    Administrador
                  </Nav.Link>
                  <Button className="nav-link">Logout</Button>
                </>
              ) : (
                <Nav.Link as={NavLink} to="/login" className="fuentetextos">
                  Login
                </Nav.Link>
              )}

              <Nav.Link as={NavLink} to="/contact" className="fuentetextos">
                Solicitar Turno
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/detalle-producto/1"
                className="fuentetextos"
              >
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top logoCarrito"
                  alt="Carrito de productos"
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
