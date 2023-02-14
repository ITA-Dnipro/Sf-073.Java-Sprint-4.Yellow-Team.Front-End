import React, { useState, useEffect } from "react";
import axios from "axios";

function ChangeUserStatus() {
  const [listUsersAccess, setListUsersAccess] = useState()
  const [change,setChange] = useState();
  const LIST_USERS_ACCESS_API = "http://localhost:28852/api/auth/list-access";

  function changeStatus(username, access){
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
    }).then(setChange);
  }

  useEffect(() => {
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
        setListUsersAccess(json)
      });
    },[change]);

  return (
    <div className="body-content">
        {listUsersAccess &&
          listUsersAccess.map((user) => (
            <div className="containers" key={user.username}>
              Username: {user.username} Status: {user.access + "ED"}
              <button className="btn btn-success btn-sm" type="submit" onClick={() => changeStatus(user.username, user.access)}>
                Change Status
              </button>
              <br></br>
            </div>
          ))}
    </div>
  );
};

export default ChangeUserStatus;
