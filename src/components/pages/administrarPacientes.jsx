

const administrarPacientes = () => {
    return (
        <>
        <section className="container">
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <h1 className=" display-4">Pacientes</h1>
                <div>
                  <button className='btn btn-primary' type="button" data-bs-toggle="modal" data-bs-target="#modalPacientes"><i className="bi bi-file-earmark-arrow-up"></i></button>
                </div>
            </div>
            <div className='my-4 table-responsive'>
                <table className=' table table-striped table-bordered table-hover'>
                    <thead>
                        <tr className='text-center'>
                            <th>Nombre y Apellido</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                            <th>Nombre de la mascota</th>
                            <th>Especie</th>
                            <th>Raza</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>Juan Gutierrez</td>
                          <td>juangutti4@gmail.com</td>
                          <td>+1(825)603-6625</td>
                          <td>Country Jockey Club</td>
                          <td>Alonso</td>
                          <td>Perro</td>
                          <td>Saluki</td>
                            <td>
                                <div className='d-flex justify-content-center gap-1'>
                                    <button className='btn btn-warning'><i class="bi bi-pencil-square"></i></button>
                                    <button className='btn btn-danger'><i class="bi bi-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <div class="modal fade" id="modalPacientes" tabindex="-1" aria-labelledby="modalPacientes" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="modalPacientes">Pacientes</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="formPacientes">
            <div class="mb-3">
  <label for="nombreDueño" class="form-label">Nombre y Apellido</label>
  <input type="text" class="form-control" id="nombreDueño" placeholder="Juan Gutierrez" required/>
</div>
 <div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input type="email" class="form-control" id="email" placeholder="juangutti4@gmail.com" required/>
</div> <div class="mb-3">
  <label for="telefono" class="form-label">Teléfono</label>
  <input type="text" class="form-control" id="telefono" placeholder="+1(825)603-6625" required/>
</div> <div class="mb-3">
  <label for="direccion" class="form-label">Direccion</label>
  <input type="text" class="form-control" id="direccion" placeholder="Country Jockey Club" required/>
</div>
 <div class="mb-3">
  <label for="nombreMascota" class="form-label">Nombre de la mascota</label>
  <input type="text" class="form-control" id="nombreMascota" placeholder="Alonso" required/>
</div> <div class="mb-3">
  <label for="especie" class="form-label">Especie</label>
  <input type="text" class="form-control" id="especie" placeholder="Perro" required/>
</div> <div class="mb-3">
  <label for="raza" class="form-label">Raza</label>
  <input type="text" class="form-control" id="raza" placeholder="Saluki" required/>
</div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default administrarPacientes;