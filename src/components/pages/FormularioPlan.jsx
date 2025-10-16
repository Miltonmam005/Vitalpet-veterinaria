import { useParams } from "react-router";
import { useState } from "react";
import {useFrom} from "react-hook-form"
function FormularioPlan() {
  const { planNombre } = useParams();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mascota: "",
    edadMascota: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", { ...formData, planSeleccionado: planNombre });
    alert(`Gracias ${formData.nombre}, el plan se ha elegido`);
  };

  return (
    <div className="formulario-plan-bg py-5">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card formulario-card shadow-lg p-4 rounded-5 col-12 col-md-8 col-lg-6">
          <div className="text-center mb-4">
            <div className="icono-circular mb-3">
              <i class="bi bi-heart-pulse fs-2 text-light"></i>
            </div>
            <h2 className="fw-bold text-verde mt-2">
              Suscribite al plan <span className="text-dorado">{planNombre}</span>
            </h2>
            <p className="text-muted mb-0">Completá tus datos para cuidar mejor a tu mascota</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control rounded-pill shadow-sm"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: María González"
                  required
                  min-length="3"
                  max-length="5"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-pill shadow-sm"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej: maria@mail.com"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  className="form-control rounded-pill shadow-sm"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ej: +54 9 351 1234567"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Nombre de la mascota</label>
                <input
                  type="text"
                  name="mascota"
                  className="form-control rounded-pill shadow-sm"
                  value={formData.mascota}
                  onChange={handleChange}
                  placeholder="Ej: Rocky"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Edad de la mascota</label>
              <input
                type="number"
                name="edadMascota"
                className="form-control rounded-pill shadow-sm"
                value={formData.edadMascota}
                onChange={handleChange}
                placeholder="Ej: 3"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-verde w-100 fw-semibold rounded-pill py-2"
            >
              <i className="bi bi-send-fill me-2"></i> Enviar solicitud
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioPlan;
