import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/shared/Menu.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import SobreNosotros from "./components/pages/sobreNosotros.jsx";
import Footer from "./components/shared/Footer.jsx";
import Inicio from "./components/Inicio";
import Login from "./components/pages/Login.jsx";
import Error404 from "./components/pages/Error404.jsx";
import Contact from "./components/pages/Contact.jsx";
import Register from "./components/pages/Register.jsx";
import { useEffect, useState } from "react";
function App() {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("userKey")) || {};
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);

  useEffect(() => {
    sessionStorage.setItem("userKey", JSON.stringify(usuarioAdmin));
  }, [usuarioAdmin]);

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route
            path="/sobreNosotros"
            element={<SobreNosotros></SobreNosotros>}
          ></Route>
          <Route
            path="/login"
            element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}
          ></Route>

          <Route path="/registro" element={<Register></Register>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
