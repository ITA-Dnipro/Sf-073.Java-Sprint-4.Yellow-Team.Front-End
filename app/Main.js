import React from "react";
import * as ReactDOM from "react-dom/client";
import ListUsers from "./components/ListUsers";
import SimpleLoginComponent from "./SimpleLoginComponent";
import { NavLink, Routes, Route, BrowserRouter } from "react-router-dom";
import HomeGuest from "./components/HomeGuest";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

function ExampleComponent() {
  return (
    <>
      <Header />
      {/* <SimpleLoginComponent />
      <ListUsers /> */}
      {/* <Route path="/" element={<HomePage />}></Route> */}
      <Routes>
        <Route path="" element={<HomeGuest />}></Route>
        {/* <Route path="" element={}></Route> */}
        <Route path="" element={<Container />}></Route>
        <Route path="users" element={<ListUsers />}></Route>
        <Route path="login" element={<SimpleLoginComponent />}></Route>
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
