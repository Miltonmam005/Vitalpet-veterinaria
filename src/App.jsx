import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/shared/Menu.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreNosotros from "./components/pages/sobreNosotros.jsx";
import Footer from "./components/Shared/Footer.jsx";
import Error404 from "./components/pages/Error404.jsx";
import Inicio from "./components/Inicio";

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
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
