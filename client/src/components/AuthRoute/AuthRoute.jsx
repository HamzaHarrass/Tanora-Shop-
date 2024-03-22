import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRoute = ({ element, roles }) => {
  const isAuthenticated = !!Cookies.get("token");
  const userRole = Cookies.get("role") || "user";
  const isAuthorized = isAuthenticated && roles.includes(userRole);
 
  return isAuthorized ? element : <Navigate to="/" replace />;
};

export default AuthRoute;