import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import StateContext from "../StateContext";
import { render } from "react-dom";
import AdminBar from "./AdminBar";
import SupportBar from "./SupportBar";

function logOut() {
  localStorage.clear();
  window.location.reload();
}

function Header(props) {
  const appState = useContext(StateContext);

  return (
    <header className="header-bar bg-warning mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            Anti fraud system
          </Link>
        </h4>
        {localStorage.getItem("role") == null && <HeaderLogin />}

        {localStorage.getItem("role") === "ADMINISTRATOR" && <AdminBar />}

        {localStorage.getItem("role") === "SUPPORT" && <SupportBar />}

        {localStorage.getItem("role") !== null && (
          <NavLink to="/" className="btn btn-success btn-sm">
            <div onClick={logOut}>Logout</div>
          </NavLink>
          // <button onClick={logOut} className="btn btn-success btn-sm">Sign Out</button>
        )}
      </div>
    </header>
  );
}

export default Header;
