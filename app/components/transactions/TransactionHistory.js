import React, { useEffect, useState } from "react"
import axios from "axios"

function TransactionHistory() {
  const [listIps, setListIps] = useState()
  const [change, setChange] = useState()
  const LIST_IPS_API = "http://localhost:28852/api/antifraud/history"

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

  return (
    <div className="list-ips">
      <div className="containers">
        <table>
          <tr>
            <th>ID</th>
            <th>amount</th>
            <th>ip</th>
            <th>number</th>
            <th>region</th>
            <th>date</th>
          </tr>
          {listIps &&
            listIps.map(transaction => (
              <tr>
                <td>{transaction.transactionId}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.ip}</td>
                <td>{transaction.number}</td>
                <td>{transaction.region}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  )
}
export default TransactionHistory
