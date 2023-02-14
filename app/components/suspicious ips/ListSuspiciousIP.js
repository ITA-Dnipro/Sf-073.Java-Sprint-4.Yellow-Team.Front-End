import React, { useEffect, useState } from "react"
import axios from "axios"

function ListSuspiciousIP() {
  const [listIps, setListIps] = useState()
  const [change, setChange] = useState()
  const LIST_IPS_API = "http://localhost:28852/api/antifraud/suspicious-ip"
  const DELETE_CARD_API = "http://localhost:28852/api/antifraud/suspicious-ip/"

  useEffect(() => {
    const base64encodedData = localStorage.getItem("Authorization")
    fetch(LIST_IPS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData
      }
    })
      .then(res => res.json())
      .then(json => {
        setListIps(json)
      })
  }, [change])

  function handleDelete(ip) {
    const base64encodedData = localStorage.getItem("Authorization")
    console.log(ip)
    axios
      .delete(DELETE_CARD_API + ip, {
        headers: {
          Authorization: base64encodedData
        }
      })
      .then(setChange)
  }

  return (
    <div className="list-ips">
      <div className="containers">
        {listIps &&
          listIps.map(ip => (
            <div key={ip.id}>
              ID: {ip.id}
              <br />
              IP: {ip.ip}
              <br />
              <button type="submit" onClick={() => handleDelete(ip.ip)} className="btn btn-success btn-sm">
                Delete
              </button>
              <br></br>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ListSuspiciousIP
