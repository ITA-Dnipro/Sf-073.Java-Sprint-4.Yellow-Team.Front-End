import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = (role) => {
  let localStorageRole = localStorage.getItem("role");

  console.log(localStorageRole, role.role, role.role2);
  return localStorageRole == role.role || localStorageRole == role.role2 ? <Outlet /> : <Navigate to="/unauthorized" />;
};
export default PrivateRoutes;
