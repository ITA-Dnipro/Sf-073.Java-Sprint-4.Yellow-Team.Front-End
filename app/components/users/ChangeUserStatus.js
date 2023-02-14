import PropTypes from "prop-types";
import React, { Component, useState } from "react";
import axios from "axios";

const LIST_USERS_ACCESS_API = "http://localhost:28852/api/auth/list-access";

export default class ChangeUserStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsersAccess: [],
    };
  }

  componentDidMount() {
    const base64encodedData = localStorage.getItem("Authorization");
    fetch(LIST_USERS_ACCESS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          listUsersAccess: json,
        });
      });
  }

  changeStatus(username, access) {
    const jsonBody = {
      username: username,
      operation: access == "LOCK" ? "UNLOCK" : "LOCK",
    };
    const base64encodedData = localStorage.getItem("Authorization");
    return axios.put("http://localhost:28852/api/auth/access", jsonBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData,
      },
    });
  }

  render() {
    if (this.state.listUsersAccess[0] != null) {
      return (
        <div>
          <div>
            {this.state.listUsersAccess &&
              this.state.listUsersAccess.map((user, ind) => (
                <div className="containers" key={user.username}>
                  Username: {user.username} Status: {user.access + "ED"}
                  <button className="btn btn-success btn-sm" type="submit" onClick={() => this.changeStatus(user.username, user.access)}>
                    Change Status
                  </button>
                  <br></br>
                </div>
              ))}
          </div>
        </div>
      );
    }
  }
}
