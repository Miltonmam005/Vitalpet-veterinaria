import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/shared/Menu.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import SobreNosotros from "./components/pages/sobreNosotros.jsx";
import Footer from "./components/shared/Footer.jsx";
import Inicio from "./components/Inicio";
import Login from "./components/pages/Login.jsx";
import Error404 from "./components/pages/Error404.jsx";
function App() {
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
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
