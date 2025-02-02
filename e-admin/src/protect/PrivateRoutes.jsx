import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(
    localStorage.getItem("admin_user")
  );

  return getTokenFromLocalStorage?.token !== undefined ? (
    children
  ) : (
    <Navigate to="/" replace={true}></Navigate>
  );
};
