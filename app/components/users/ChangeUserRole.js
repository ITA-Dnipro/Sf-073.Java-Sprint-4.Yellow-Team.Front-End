import React, { Component, setState } from "react";
import axios from "axios";

const LIST_USERS_API = "http://localhost:28852/api/auth/list";
const roles = [
  {
    label: "Merchant",
    value: "MERCHANT",
  },
  {
    label: "Support",
    value: "SUPPORT",
  },
];

export default class ChangeUserRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsersRoles: [],
      role: "MERCHANT",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const base64encodedData = localStorage.getItem("Authorization");
    fetch(LIST_USERS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          listUsersRoles: json,
        });
      });
  }

  changeRole(username, role) {
    const jsonBody = {
      username: username,
      role: role,
    };
    console.log(jsonBody);
    const base64encodedData = localStorage.getItem("Authorization");
    return axios
      .put("http://localhost:28852/api/auth/role", jsonBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: base64encodedData,
        },
      })
      .then(() => {
        alert("Role changed succesfuly");
      });
  }

  handleChange(e) {
    console.log("Role Selected!!!");
    this.setState({ role: e.target.value });
    console.log(e.target.value);
  }

  render() {
    if (this.state.listUsersRoles[0] != null) {
      return (
        <div className="change-roles">
          <div className="containers">
            {this.state.listUsersRoles &&
              this.state.listUsersRoles.map((user, ind) => (
                <div key={user.username}>
                  Username: {user.username} Role: {user.role}
                  <select className="containers" name="role" id="cars" value={this.state.roles} onChange={this.handleChange}>
                    {roles.map((roles) => (
                      <option value={roles.value}>{roles.label}</option>
                    ))}
                  </select>
                  <button type="submit" onClick={() => this.changeRole(user.username, this.state.role)} className="btn btn-success btn-sm">
                    Change Role
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
