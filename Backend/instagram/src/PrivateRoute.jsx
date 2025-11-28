// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

  const isAuth = localStorage.getItem("token"); // token ya login status check

  return isAuth ? children : <Navigate to="/Clone" />;
};

export default PrivateRoute;
