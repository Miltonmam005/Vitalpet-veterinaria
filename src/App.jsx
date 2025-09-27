import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/shared/Menu";
import Footer from "./components/Shared/Footer.jsx";

function App() {
  return (
    <>
      <Menu></Menu>
      <main className="container my-4">
        <h1 className="text-center">Bienvenidos a la veterinaria VitalPet</h1>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
