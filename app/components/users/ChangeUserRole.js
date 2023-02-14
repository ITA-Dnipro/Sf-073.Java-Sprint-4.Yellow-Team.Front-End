import React, { Component, setState, useState, useEffect } from "react"
import axios from "axios"

const LIST_USERS_API = "http://localhost:28852/api/auth/list"
const CHANGE_USER_ROLE = "http://localhost:28852/api/auth/role"
const roles = [
  {
    label: "Merchant",
    value: "MERCHANT"
  },
  {
    label: "Support",
    value: "SUPPORT"
  }
]

export default class ChangeUserRole extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listUsersRoles: [],
      role: "MERCHANT"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const base64encodedData = localStorage.getItem("Authorization")
    fetch(LIST_USERS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          listUsersRoles: json
        })
      })
  }

  async changeRole(username, role) {
    const jsonBody = {
      username: username,
      role: role
    }
    console.log(jsonBody)
    const base64encodedData = localStorage.getItem("Authorization")
    await axios.put(CHANGE_USER_ROLE, jsonBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData
      }
    })
    alert("Role changed succesfuly")
  }

  handleChange(e) {
    console.log("Role Selected!!!")
    this.setState({ role: e.target.value })
    console.log(e.target.value)
  }

  render() {
    if (this.state.listUsersRoles[0] != null) {
      return (
        <div className="change-roles">
          <div className="containers">
            {this.state.listUsersRoles.map(user => (
              <div key={user.id}>
                Username: {user.username} Role: {user.role}
                <select className="containers" name="role" id="users" value={this.state.role} onChange={this.handleChange}>
                  {roles.map(roles => (
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
      )
    }
  }
}
