import React, { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
  let role1 = localStorage.getItem("role")

  return role1 == "MERCHANT" || role1 == "SUPPORT" || role1 == "ADMINISTRATOR" ? <Outlet /> : <Navigate to="/login" />
}
export default PrivateRoutes
