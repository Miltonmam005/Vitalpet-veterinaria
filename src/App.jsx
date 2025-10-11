import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/shared/Menu.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import SobreNosotros from './components/pages/sobreNosotros.jsx';
import administrarPacientes from './components/pages/administrarPacientes.jsx';
import Footer from "./components/shared/Footer.jsx"
import Inicio from './components/Inicio';
function App() {
  return (
    <>
      <BrowserRouter>
    <Menu/>
      <Routes>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      <Route path="/sobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
      <Route path="/administrarPacientes" element={<administrarPacientes></administrarPacientes>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
