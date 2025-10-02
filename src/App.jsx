
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/shared/Menu'
import { BrowserRouter, Route, Routes } from 'react-router';
import Inicio from './components/Inicio';
import Footer from "./components/Shared/Footer.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
   <Menu></Menu>
     <main >
      <Routes>
      <Route path="/" element={<Inicio></Inicio>}></Route>
      </Routes>
    </main>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
