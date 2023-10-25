/* eslint-disable react/prop-types */
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  isAllowed,
  redirectPath = "/register",
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
