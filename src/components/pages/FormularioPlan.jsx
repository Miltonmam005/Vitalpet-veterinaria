import { useParams } from "react-router";
import { useState } from "react";

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
    alert(`Gracias ${formData.nombre}, elegiste el plan "${planNombre}"`);
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4 text-success">
          Formulario de suscripción - {planNombre}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              className="form-control"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Nombre de la mascota</label>
            <input
              type="text"
              name="mascota"
              className="form-control"
              value={formData.mascota}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Edad de la mascota</label>
            <input
              type="number"
              name="edadMascota"
              className="form-control"
              value={formData.edadMascota}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 fw-semibold rounded-pill">
            Enviar solicitud
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioPlan;
