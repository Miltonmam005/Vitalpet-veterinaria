import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Menu from "./components/shared/Menu.jsx";
import Footer from "./components/shared/Footer.jsx";
import Inicio from "./components/Inicio";
import SobreNosotros from "./components/pages/sobreNosotros.jsx";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";
import Contact from "./components/pages/Contact.jsx";
import Error404 from "./components/pages/Error404.jsx";

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
        <Route 
          path="/login" 
          element={<Login setUsuarioAdmin={setUsuarioAdmin} />} 
        />
        <Route path="/registro" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;