import React from "react";
import { Navigate, Route } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRoute = ({ element, roles }) => {
  const isAuthenticated = !!Cookies.get("token"); 

  console.log("isAuthenticated:", isAuthenticated);

  let userRole = Cookies.get("role");

  console.log("userRole cookie:", userRole);

  userRole = userRole || "user";

  const isAuthorized = isAuthenticated && roles.includes(userRole);

  return isAuthorized ? element : <Navigate to="/" replace />;
};

export default AuthRoute;
