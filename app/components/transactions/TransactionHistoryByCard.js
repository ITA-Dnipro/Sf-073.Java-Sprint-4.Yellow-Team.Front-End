import React, { useEffect, useState } from "react"
import axios from "axios"

function TransactionHistoryByCard() {
  const [listIps, setListIps] = useState()
  const [change, setChange] = useState()
  const [card_number, setNumber] = useState()
  const LIST_IPS_API = "http://localhost:28852/api/antifraud/history/"

  function getListOfTransactions() {
    const base64encodedData = localStorage.getItem("Authorization")
    fetch(LIST_IPS_API + card_number, {
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
  }

  function handleSubmit(e) {
    e.preventDefault()
    try {
      getListOfTransactions()
    } catch (e) {
      alert("There was an error.")
      console.log("There was an error.")
    }
  }

  return (
    <div className="list-transactions">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="number" name="number" onChange={e => setNumber(e.target.value)} />
          <button type="submit"> OK </button>
        </div>
      </form>
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
export default TransactionHistoryByCard
