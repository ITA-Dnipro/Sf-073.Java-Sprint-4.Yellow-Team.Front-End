import React from "react";
import * as ReactDOM from "react-dom/client";
import ListUsers from "./components/ListUsers";
import SimpleLoginComponent from "./components/SimpleLoginComponent";
import { NavLink, Routes, Route, BrowserRouter } from "react-router-dom";
import HomeGuest from "./components/HomeGuest";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import PrivateRoutes from "./utils/PrivateRoutes";
import ChangeUserStatus from "./components/ChangeUserStatus";
import AdminBar from "./components/AdminBar";
import ChangeUserRole from "./components/ChangeUserRole";
import SupportBar from "./components/SupportBar";

function ExampleComponent() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/users" element={<ListUsers />}></Route>
          <Route path="/change-user-status" element={<ChangeUserStatus />}></Route>
          <Route path="/change-user-role" element={<ChangeUserRole />}></Route>
          {/* <Route path="/admin" element={<AdminBar />}></Route> */}
          {/* <Route path="/" element={localStorage.getItem("role") === "SUPPORT" ? <SupportBar />:<SimpleLoginComponent />}></Route> */}

        </Route>

        <Route path="" element={<HomeGuest />}></Route>
        <Route path="" element={<Container />}></Route>
        <Route path="/login" element={<SimpleLoginComponent />}></Route>
        <Route path="about-us" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ExampleComponent />
    </BrowserRouter>
  </React.StrictMode>
);
if (module.hot) {
  module.hot.accept();
}
