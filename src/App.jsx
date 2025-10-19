import FormularioPlan from "./components/pages/FormularioPlan.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Menu from "./components/Shared/Menu.jsx";
import Footer from "./components/Shared/Footer.jsx";
import Inicio from "./components/Inicio.jsx";
import SobreNosotros from "./components/pages/sobreNosotros.jsx";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";
import Contact from "./components/pages/Contact.jsx";
import Error404 from "./components/pages/Error404.jsx";
import Administrador from "./components/pages/Administrador.jsx";
import AdministrarPacientes from "./components/pages/administrarPacientes.jsx";
import AdministrarTurnos from "./components/pages/administrarTurnos.jsx";
import DetalleProductos from "./components/pages/DetalleProductos.jsx";
import "./index.css";

function App() {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("userKey")) || {};
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);

  useEffect(() => {
    sessionStorage.setItem("userKey", JSON.stringify(usuarioAdmin));
  }, [usuarioAdmin]);

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobreNosotros" element={<SobreNosotros />} />
        <Route path="/login" element={<Login setUsuarioAdmin={setUsuarioAdmin} />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/administrar-pacientes" element={<AdministrarPacientes />} />
        <Route path="/administrar-turnos" element={<AdministrarTurnos />} />
        <Route path="/detalle-producto/:id" element={<DetalleProductos />} />
        <Route path="/formularioplan" element={<FormularioPlan></FormularioPlan>}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;