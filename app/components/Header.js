import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import HeaderLogin from "./HeaderLogin"
import StateContext from "../StateContext"

function Header(props) {
  const appState = useContext(StateContext)

  return (
    <header className="header-bar bg-warning mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            Anti fraud system
          </Link>
        </h4>
        <HeaderLogin />
      </div>
    </header>
  )
}

export default Header
