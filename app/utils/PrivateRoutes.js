import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const [role, setRole] = useState("SUPPORT");
  let role1 = localStorage.getItem("role");

  return role1 == "SUPPORT" ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
