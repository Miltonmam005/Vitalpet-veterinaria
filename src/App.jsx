import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/shared/Menu'
import { BrowserRouter, Route, Routes } from 'react-router';
import SobreNosotros from './components/sobreNosotros.jsx';
function App() {
  

  return (
    <>
    <BrowserRouter>
   <Menu></Menu>
     <main >
      <Routes>
      <Route path="/sobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
      </Routes>
    </main>
   <footer className='bg-darck text-light text-center py-3'>
    <p> Todos los derechos reservados</p>    
    </footer>  
   </BrowserRouter>
    </>
  )
}

export default App;