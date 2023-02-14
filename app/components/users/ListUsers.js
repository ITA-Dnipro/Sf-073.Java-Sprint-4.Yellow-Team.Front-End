import React, { useEffect, useState } from "react"
import axios from "axios"

function ListUsers() {
  const [listUsers, setListUsers] = useState()
  const [change, setChange] = useState()
  const LIST_USERS_API = "http://localhost:28852/api/auth/list"
  const DELETE_USERS_API = "http://localhost:28852/api/auth/user/"

  useEffect(() => {
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
        setListUsers(json)
      })
  }, [change])
  function handleDelete(username) {
    const base64encodedData = localStorage.getItem("Authorization")
    console.log(username)
    axios
      .delete(DELETE_USERS_API + username, {
        headers: {
          Authorization: base64encodedData
        }
      })
      .then(setChange)

  }

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
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.map((user) => (
                <tr>
                  <th scope="row" key = {user.id}>
                    {user.id}
                  </th>
                  <td>{user.name}</td>
                  <td>
                    {user.username}
                  </td>
                  <td>
                    {user.role}
                  </td>
                  <td><button type="submit" onClick={() => handleDelete(user.username)} className="btn btn-danger btn-sm">
                    Delete user
                  </button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListUsers
