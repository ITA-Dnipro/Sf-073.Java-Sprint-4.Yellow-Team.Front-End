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
    <div className="list-cards">
      <div className="containers">
        {listUsers &&
          listUsers.map(user => (
            <div key={user.id}>
              id: {user.id}
              <br />
              name: {user.name}
              <br />
              username: {user.username}
              <br />
              role: {user.role}
              <br />
              <button type="submit" onClick={() => handleDelete(user.username)} className="btn btn-success btn-sm">
                Delete user
              </button>
              <br></br>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ListUsers
