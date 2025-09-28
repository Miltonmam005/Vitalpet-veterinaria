import { Image } from "react-bootstrap";
const sobreNosotros = () => {
  return (
    <>
      <h1 className="text-center mt-3">Acerca de nosotros</h1>
      <section className="container">
        <div className="row align-items-center">
          {/* Imagen */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg"
              alt="veterinaria vitalpet"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Texto */}
          <div className="col-md-6">
            <h4 className="fw-bold">Cuidando a tus mascotas desde 2005 🐾</h4>
            <p className="text-muted">
              En <strong>VitalPet</strong> creemos que cada mascota es parte de
              la familia. Nuestro equipo de veterinarios y especialistas ofrece
              atención médica de calidad, cariño y compromiso en cada consulta.
            </p>
            <p>
              Contamos con servicios de{" "}
              <em>
                consultas médicas, vacunación, cirugías, peluquería canina y
                guardería
              </em>
              . Además, ofrecemos productos seleccionados para la salud y el
              bienestar de tus animales.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div class="row text-center my-5">
  <div class="col-md-4">
    <div class="card shadow border-0 p-3 h-100">
      <i class="bi bi-heart-fill text-danger fs-1"></i>
      <h5 class="mt-3">Amor por las mascotas</h5>
      <p>Tratamos a cada paciente con cariño y dedicación.</p>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card shadow border-0 p-3 h-100">
      <i class="bi bi-shield-check text-success fs-1"></i>
      <h5 class="mt-3">Confianza</h5>
      <p>Profesionales certificados con experiencia comprobada.</p>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card shadow border-0 p-3 h-100">
      <i class="bi bi-emoji-smile text-primary fs-1"></i>
      <h5 class="mt-3">Compromiso</h5>
      <p>Tu mascota siempre en las mejores manos.</p>
    </div>
  </div>
</div>

        {/*integrantes */}
        <div className="row text-center d-flex justify-content-center mt-5">
          <h3 className="mb-4">Nuestros integrantes</h3>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body bg-body-secondary">
                <Image src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg" className="w-100 mb-2 img-circular-sobreNosotros"  />
                <h2>Jose Benjamin Quiros</h2>
                <p className="card-text">
                  fue el encargado del maquetado de  algunas paginas y parte de su logica, asi como de realizar modificaciones en el backend.

                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
               <div className="card-body bg-body-secondary">
                <Image src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg" className="w-100 mb-2 img-circular-sobreNosotros"  />
                <h2>Milton Ramón  Mamani  </h2>
                <p className="card-text">
                  fue el encargado del maquetado de  algunas paginas y parte de su logica, asi como de realizar modificaciones en el backend.
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
               <div className="card-body bg-body-secondary">
                <Image src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg" className="w-100 mb-2 img-circular-sobreNosotros"  />
                <h2>Santiago Uriel Gonzalez</h2>
                <p className="card-text">
                  fue el encargado del maquetado de  algunas paginas y parte de su logica, asi como de realizar modificaciones en el backend.
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
               <div className="card-body bg-body-secondary">
                <Image src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg" className="w-100 mb-2 img-circular-sobreNosotros"  />
                <h2>JCelina Gabriela  Acosta</h2>
                <p className="card-text">
                  fue el encargado del maquetado de  algunas paginas y parte de su logica, asi como de realizar modificaciones en el backend.
                  
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
               <div className="card-body bg-body-secondary">
                <Image src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg" className="w-100 mb-2 img-circular-sobreNosotros"  />
                <h2>Tobias Conde</h2>
                <p className="card-text">
                  fue el encargado del maquetado de  algunas paginas y parte de su logica, asi como de realizar modificaciones en el backend.
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default sobreNosotros;
