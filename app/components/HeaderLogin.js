import React, { useEffect, useState, useContext } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Axios from "axios";
import DispatchContext from "../DispatchContext";
import LoginService from "../services/LoginService";

function HeaderLogin(props) {
  const appDispatch = useContext(DispatchContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [role,setRole] =  useState();
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     const response = await Axios.post("/api/auth/login", {
  //       username,
  //       password,
  //     });
  //     if (response.data) {
  //       appDispatch({ type: "login", data: response.data });
  //     } else {
  //       console.log("Incorrect username / password.");
  //     }
  //   } catch (e) {
  //     console.log("There was a problem.");
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    LoginService.login(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  );
}

export default HeaderLogin;
