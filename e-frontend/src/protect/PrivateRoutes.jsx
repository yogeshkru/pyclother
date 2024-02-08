import { Children } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({}) => {
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  return getTokenFromLocalStorage?.token !== undefined ? (
    Children
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
