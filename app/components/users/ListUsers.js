import React, { Component } from "react"
import { Buffer } from "buffer"

const LIST_USERS_API = "http://localhost:28852/api/auth/list"
export default class ListUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listUsers: []
    }
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
          listUsers: json
        })
      })
  }

  render() {
    if (this.state.listUsers[0] != null) {
      // return (
      //   <div>
      //     <div className="container">
      //       {this.state.listUsers &&
      //         this.state.listUsers.map((user, ind) => (
      //           <div key={user.id}>
      //             {user.id}
      //             <br />
      //             {user.name}
      //             <br /> {user.username} <br /> {user.role} <br />
      //             <br />
      //           </div>
      //         ))}
      //     </div>
      //   </div>
      // )
      return (
        <div className="maincontainer">
          <div className="py-4">
            <table className="table border shadow">
              <thead>
                <tr>
                <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                {this.state.listUsers &&
               this.state.listUsers.map((user) => (
                  <tr>
                    <th scope="row">
                      {user.id}
                    </th>
                    <td>{user.name}</td>
                    <td>
                    {user.username}
                    </td>
                    <td>
                    {user.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
