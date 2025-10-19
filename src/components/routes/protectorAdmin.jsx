import { Navigate, Outlet } from "react-router-dom";

const ProtectorAdmin = ({ usuarioAdmin }) => {
  if (!usuarioAdmin || !usuarioAdmin.token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectorAdmin;
