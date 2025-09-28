import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/shared/Menu'
import { BrowserRouter, Route, Routes } from 'react-router';
import sobreNosotros from './components/sobreNosotros.jsx';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<sobreNosotros></sobreNosotros>}></Route>
      </Routes>
   <Menu></Menu>
     <main className='container my-4'>
    <h1 className='text-center'>Bienvenidos a la veterinaria VitalPet</h1>
    
    </main>
   <footer className='bg-darck text-light text-center py-3'>
    <p> Todos los derechos reservados</p>    
    </footer>  
   </BrowserRouter>
    </>
  )
}

export default App;