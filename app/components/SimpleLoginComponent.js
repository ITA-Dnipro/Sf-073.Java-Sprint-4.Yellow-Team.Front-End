
import React, { Component, useState, useContext } from "react";

import LoginService from "../services/LoginService";
var username;
var password;
const handleLogin = () => {
  LoginService.login(username, password);
};
class SimpleLoginComponent extends Component {



  render() {
    return (
      <div>
        <label>Username</label>
        <input onChange={(e) => username=e.target.value} type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Title" />
        <label>Password</label>
        <input onChange={(e) => password=e.target.value} type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Password" />

        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default SimpleLoginComponent;
