import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, fila, borrarProducto, destacarProducto }) => {
  const eliminarProducto = () => {
    Swal.fire({
      title: "Eliminar producto",
      text: "No puedes revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#277a35ff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        if (borrarProducto(producto.id)) {
          Swal.fire({
            title: "Producto eliminada!",
            text: `El producto ${producto.title} fue eliminada correctamente`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocurrió un error!",
            text: `El producto ${producto.title} no pudo ser eliminada`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{fila}</td>
      <td>{producto.title}</td>
      <td className="text-center">{producto.type}</td>
      <td className="text-center">{producto.year}</td>
      <td>{producto.genre}</td>
      <td className="text-center">
        <div className="d-flex gap-1 justify-content-center">
          <Link
            to={`/administrador/editar/${producto.id}`}
            className="btn btn-warning me-lg-2"
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button
            variant="danger"
            onClick={eliminarProducto}
            className="me-lg-2"
          >
            <i className="bi bi-trash"></i>
          </Button>
          <Button
            variant="transparent"
            onClick={() => destacarProducto(producto.id)}
          >
            {producto.destacada ? (
              <i className="bi bi-star-fill fs-4 text-success"></i>
            ) : (
              <i className="bi bi-star text-success"></i>
            )}
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemProducto;
