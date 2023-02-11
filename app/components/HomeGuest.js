import React, { useState } from "react";
import Page from "./Page";
import register from "../services/RegisterService";
import RegisterService from "../services/RegisterService";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

function HomeGuest() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    try {
      RegisterService.register();
      console.log("User was successfully created.");
      navigate("/login");
    } catch (e) {
      console.log("There was an error.");
    }
  }

  return (
    <Page title="Welcome!" wide={true}>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Here to do some text</h1>
          <p className="lead text-muted">what about this system</p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name-register" className="text-muted mb-1">
                <small>Name</small>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                id="name-register"
                name="name"
                className="form-control"
                type="text"
                placeholder="Pick a name"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Login</small>
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                id="username-register"
                name="username"
                className="form-control"
                type="text"
                placeholder="Pick a login"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password-register"
                name="password"
                className="form-control"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <button
              type="submit"
              className="py-3 mt-4 btn btn-lg btn-success btn-block"
            >
              Add user
            </button>
          </form>
        </div>
      </div>
    </Page>
  );
}

export default HomeGuest;
