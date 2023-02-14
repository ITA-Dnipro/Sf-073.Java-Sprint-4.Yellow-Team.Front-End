import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let role1 = localStorage.getItem("role");
  // if(!(localStorage.getItem("role")=="ADMINISTRATOR")){
  //   window.location.href = '../'
  // }
  // else{

  return role1 == "SUPPORT" || role1 == "ADMINISTRATOR"? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
