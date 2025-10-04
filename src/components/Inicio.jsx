import 'bootstrap/dist/css/bootstrap.min.css';

function Inicio() {
  return (
    <div>
      {/* HERO */}
      <header className="hero px-5 intercaloverde">
  <div className="row align-items-center">
    <div className="col-12 col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
      <h1 className="text-light Titulosinicio TitulosinicioTamaño">Vital pet</h1>
      <p className="text-light">
        "Cuidamos a tus mascotas como parte de nuestra familia"
      </p>
      <button className="btn btn-success me-2">Conocer nuestros planes</button>
      <button className="btn btn-warning">Agenda tu turno</button>
    </div>
    <div className="col-12 col-lg-6 text-center">
      <img
        src="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg"
        alt="Mascota"
        className="hero-img img-fluid mx-lg-5"
      />
    </div>

  </div>
</header>


      {/* SERVICIOS */}
      <section className="py-5 text-center intercaloclaro">
        <h2 className="mb-4 text-warning"><span className="text-success">Nuestros Servicios</span> | Proporcionamos</h2>
        <div className="container">
          <div className="row">
              <div className="col-md-3 mb-3">
                <div className="card h-100 text-white" >
                  <div className="card-body">
                    <i class="bi bi-bandaid fs-1"></i>
                    <h5>Medicina General</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 text-white" >
                  <div className="card-body">
                    <i class="bi bi-peace fs-1"></i>
                    <h5>Estética y Cuidado</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 text-white" >
                  <div className="card-body">
                    <i class="bi bi-heart-pulse fs-1"></i>
                    <h5>Cirugía</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card h-100 text-white" >
                  <div className="card-body">
                    <i class="bi bi-hospital fs-1"></i>
                    <h5>Emergencias</h5>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-5 intercaloverde" >
        <div className="container">
          <h2><span className="text-warning">Productos</span> | Tienda</h2>
          <div className="row mt-4">
            {[...Array(6)].map((_, i) => (
              <div className="col-md-2 mb-3" key={i}>
                <div className="card" style={{height:"150px"}}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section className="py-4 text-center intercaloclaro">
        <h3>Marcas con las que trabajamos</h3>
        <div className="d-flex justify-content-center mt-3">
          {[...Array(5)].map((_, i) => (
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Froyal-canin-logo%2F&psig=AOvVaw2WfXuiuOb3jzl8OmfffcYH&ust=1759534276344000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJjf6aTWhpADFQAAAAAdAAAAABAE" alt="Royal Canin" className="mx-3" height={40} key={i}/>
          ))}
        </div>
      </section>

      {/* PLANES */}
      <section className="py-5 text-center intercaloverde">
        <h3>Planes de <span className="text-warning">salud</span></h3>
        <p>Escoja el mejor cuidado para tu mascota</p>
        <div className="container">
          <div className="row">
            {[
              {precio:"$20", nombre:"Primeros Pasos", detalle:"Para mascotas de 0 a 1 año"},
              {precio:"$20", nombre:"Madurando", detalle:"Para mascotas de 2 a 5 años"},
              {precio:"$20", nombre:"Adultos", detalle:"Para mascotas de 6 a 9 años"},
            ].map((plan, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <div className="card p-3">
                  <h4>{plan.precio} <small>/mes</small></h4>
                  <h5>{plan.nombre}</h5>
                  <p>{plan.detalle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESIONALES */}
      <section className="py-5 text-center intercaloclaro">
        <h3>Conozca al equipo que cuidará de sus mascotas</h3>
        <div className="d-flex justify-content-center mt-4">
          {[...Array(3)].map((_, i) => (
            <div className="card mx-2 p-3" style={{width:"200px"}} key={i}>
              <img src="/doctor.jpg" alt="Doctor" className="rounded-circle mx-auto" width={100}/>
              <h6 className="mt-2">Dr. Pablo Sanchez</h6>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-5 intercaloverde">
        <div className="container text-center">
          <h3><span className="text-warning">Testimonios</span> | Tu opinión nos importa</h3>
          <p><button className="btn btn-success">Deja tu huella</button></p>
          <div className="row">
            {["Increíble!!", "Excelente.", "Increíble!!"].map((test, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <div className="card p-3">
                  <h5>{test}</h5>
                  <p>★★★★★</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}

export default Inicio;
