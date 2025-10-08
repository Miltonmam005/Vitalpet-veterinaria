import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Inicio =()=>{
  return(
    <>
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
              <div className="col-md-3 mb-3 ">
                <div className="card h-100 text-white" >
                  <div className="card-body cardservicioverde radius">
                    <i className="bi bi-bandaid iconosServicio"></i>
                    <h5>Medicina General</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3 ">
                <div className="card h-100 text-white" >
                  <div className="card-body cardservicioamarillo radius">
                    <i className="bi bi-peace iconosServicio"></i>
                    <h5>Estética y Cuidado</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3 ">
                <div className="card h-100 text-white" >
                  <div className="card-body cardservicioverde radius">
                    <i className="bi bi-heart-pulse iconosServicio"></i>
                    <h5>Cirugía</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3 ">
                <div className="card h-100 text-white " >
                  <div className="card-body cardservicioamarillo radius">
                    <i className="bi bi-hospital iconosServicio"></i>
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
          <div className="row mt-4 d-flex justify-content-center">
            <div className="row gy-4">
              {/* CARD 1 */}
              <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="cardservicioamarillo rounded p-2 m-3 d-flex flex-column w-100">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/28802855/pexels-photo-28802855.jpeg"
                    alt="Cucha de perro pequeña"
                    className="imgCardIndex"
                  />
                  <Card.Body className="flex-grow-1">
                    <h3>Cucha para perro pequeña</h3>
                      <h2 className="Titulosinicio">$5.600</h2>
                      <h5>Cucha para perros pequeños</h5>
                  </Card.Body>
                  <Button variant="success" className="w-100 mt-auto">
                    Comprar
                  </Button>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="cardservicioamarillo rounded p-2 m-3 d-flex flex-column w-100">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/6035982/pexels-photo-6035982.jpeg"
                    alt="Comedero doble de acero"
                    className="imgCardIndex"
                  />
                  <Card.Body className="flex-grow-1">
                    <h3>Comedero doble de acero</h3>
                      <h2 className="Titulosinicio">$2.900</h2>
                      <h5>Comedero y bebedero antideslizante para mascotas</h5>
                  </Card.Body>
                  <Button variant="success" className="w-100 mt-auto">
                    Comprar
                  </Button>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="cardservicioamarillo rounded p-2 m-3 d-flex flex-column w-100">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/27895178/pexels-photo-27895178.jpeg"
                    alt="Cucha para perro mediana"
                    className="imgCardIndex"
                  />
                  <Card.Body className="flex-grow-1">
                    <h3>Cucha para perro mediana</h3>
                      <h2 className="Titulosinicio">$8.500</h2>
                      <h5>Ideal para razas medianas, cómoda y resistente al agua</h5>
                  </Card.Body>
                  <Button variant="success" className="w-100 mt-auto">
                    Comprar
                  </Button>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="cardservicioamarillo rounded p-2 m-3 d-flex flex-column w-100">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/20449895/pexels-photo-20449895.jpeg"
                    alt="Juguete mordedor para perro"
                    className="imgCardIndex"
                  />
                  <Card.Body className="flex-grow-1">
                    <h3>Juguete mordedor</h3>
                      <h2 className="Titulosinicio">$1.200</h2>
                      <h5>Hecho de caucho natural, ayuda a la salud dental</h5>
                  </Card.Body>
                  <Button variant="success" className="w-100 mt-auto">
                    Comprar
                  </Button>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="cardservicioamarillo rounded p-2 m-3 d-flex flex-column w-100">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/10292639/pexels-photo-10292639.jpeg"
                    alt="Cama para gato"
                    className="imgCardIndex"
                  />
                  <Card.Body className="flex-grow-1">
                    <h3>Cama para gato</h3>
                      <h2 className="Titulosinicio">$6.000</h2>
                      <h5>Suave, lavable y perfecta para el descanso felino</h5>
                  </Card.Body>
                  <Button variant="success" className="w-100 mt-auto">
                    Comprar
                  </Button>
                </div>
              </div>

              {/* CARD 6 */}
              <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="cardservicioamarillo rounded p-2 m-3 d-flex flex-column w-100">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/9769849/pexels-photo-9769849.jpeg"
                    alt="Transportadora de mascotas"
                    className="imgCardIndex"
                  />
                  <Card.Body className="flex-grow-1">
                    <h3>Transportadora de mascotas</h3>
                      <h2 className="Titulosinicio">$12.900</h2>
                      <h5>Segura y ventilada, ideal para viajes o visitas al veterinario</h5>
                  </Card.Body>
                  <Button variant="success" className="w-100 mt-auto">
                    Comprar
                  </Button>
                </div>
              </div>
            </div>
          </div> 
        </div>
    </section>
    
      {/* MARCAS */}
<section className="py-4 text-center intercaloclaro">
        <h3>Marcas con las que trabajamos</h3>
            <img src="https://1000logos.net/wp-content/uploads/2020/07/Royal-Canin-Logo.png" alt="Royal Canin logo" className="mx-3" height={40}/>
            <img src="https://1000logos.net/wp-content/uploads/2020/07/Purina-Logo.png" alt="Purina logo" className="mx-3" height={40}/>
            <img src="https://1000logos.net/wp-content/uploads/2025/01/Petco-Logo.png" alt="Petco logo" className="mx-3" height={40}/>
            <img src="" alt="Royal Canin" className="mx-3" height={40}/>
            <img src="" alt="Royal Canin" className="mx-3" height={40}/>
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
    <div><button className="btn btn-success">Deja tu huella</button></div>
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
    </>
  )
}
export default Inicio