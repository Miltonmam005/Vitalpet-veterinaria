import 'bootstrap/dist/css/bootstrap.min.css';

function Inicio() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">Bienvenidos a Vitalpet</h1>
        <p className="lead">Cuidamos a tus mascotas como parte de nuestra familia 🐾</p>
      </section>

      {/* SERVICIOS */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>Consultas generales</h5>
              <p>Atención veterinaria personalizada para tu mascota.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>Vacunación</h5>
              <p>Calendario completo de vacunas para perros y gatos.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>Peluquería</h5>
              <p>Baños, cortes y estética para tu mascota.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Productos Destacados</h2>
          <div className="row text-center">
            <div className="col-md-3">
              <img src="https://placehold.co/200x200" className="img-fluid" alt="Producto" />
              <p>Alimento balanceado</p>
            </div>
            <div className="col-md-3">
              <img src="https://placehold.co/200x200" className="img-fluid" alt="Producto" />
              <p>Juguetes para perros</p>
            </div>
            <div className="col-md-3">
              <img src="https://placehold.co/200x200" className="img-fluid" alt="Producto" />
              <p>Rascadores para gatos</p>
            </div>
            <div className="col-md-3">
              <img src="https://placehold.co/200x200" className="img-fluid" alt="Producto" />
              <p>Collares y correas</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="container my-5 text-center">
        <h2 className="mb-4">Marcas con las que trabajamos</h2>
        <div className="d-flex justify-content-around flex-wrap">
          <img src="https://placehold.co/150x80" alt="Marca" />
          <img src="https://placehold.co/150x80" alt="Marca" />
          <img src="https://placehold.co/150x80" alt="Marca" />
          <img src="https://placehold.co/150x80" alt="Marca" />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Lo que dicen nuestros clientes</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <blockquote>"Excelente atención, mi perro fue tratado con mucho amor."</blockquote>
              <p>- Ana G.</p>
            </div>
            <div className="col-md-4">
              <blockquote>"Gran variedad de productos y precios accesibles."</blockquote>
              <p>- Carlos R.</p>
            </div>
            <div className="col-md-4">
              <blockquote>"Los planes de salud son una gran ayuda para mi gatita."</blockquote>
              <p>- María L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESIONALES */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Nuestro Equipo</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <img src="https://placehold.co/200x200" className="rounded-circle mb-2" alt="Vet" />
            <h6>Dr. Juan Pérez</h6>
            <p>Veterinario</p>
          </div>
          <div className="col-md-3">
            <img src="https://placehold.co/200x200" className="rounded-circle mb-2" alt="Vet" />
            <h6>Dra. Laura Gómez</h6>
            <p>Especialista en gatos</p>
          </div>
          <div className="col-md-3">
            <img src="https://placehold.co/200x200" className="rounded-circle mb-2" alt="Vet" />
            <h6>María López</h6>
            <p>Asistente</p>
          </div>
          <div className="col-md-3">
            <img src="https://placehold.co/200x200" className="rounded-circle mb-2" alt="Vet" />
            <h6>Carlos Díaz</h6>
            <p>Peluquero Canino</p>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Planes de Salud Vitalpet</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-dark mb-3">
                <div className="card-body">
                  <h5 className="card-title">Primeros Pasos</h5>
                  <p>Mascotas de 0 a 5 años</p>
                  <a href="/formulario" className="btn btn-primary">Más info</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-dark mb-3">
                <div className="card-body">
                  <h5 className="card-title">Madurando</h5>
                  <p>Mascotas de 5 a 10 años</p>
                  <a href="/formulario" className="btn btn-primary">Más info</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-dark mb-3">
                <div className="card-body">
                  <h5 className="card-title">Adultos</h5>
                  <p>Mascotas de más de 10 años</p>
                  <a href="/formulario" className="btn btn-primary">Más info</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Inicio;
