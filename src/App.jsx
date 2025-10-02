
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/shared/Menu.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import SobreNosotros from './components/sobreNosotros.jsx';
import Footer from "./components/shared/Footer.jsx"
function App() {
  return (
    <>
    <Menu/>
    <BrowserRouter>
      <Routes>
      <Route path="/sobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App;
