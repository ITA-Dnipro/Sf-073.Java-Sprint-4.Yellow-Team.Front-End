import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutesAdmin = () => {
  let role1 = localStorage.getItem("role");
  // if(!(localStorage.getItem("role")=="ADMINISTRATOR")){
  //   window.location.href = '../'
  // }
  // else{

  return role1 == "ADMINISTRATOR"? <Outlet /> : <Navigate to="../" />;
};
export default PrivateRoutesAdmin;
