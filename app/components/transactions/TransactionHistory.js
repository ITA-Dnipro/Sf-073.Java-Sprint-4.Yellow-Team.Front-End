import React, { useEffect, useState } from "react"
import axios from "axios"
import TransactionFeedback from "./TransactionFeedback"

function TransactionHistory() {
  const [listTransactions, setListTransactions] = useState()
  const [change, setChange] = useState()
  const LIST_TRANSACTIONS_API = "http://localhost:28852/api/antifraud/history"

  useEffect(() => {
    const base64encodedData = localStorage.getItem("Authorization")
    fetch(LIST_TRANSACTIONS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData
      }
    })
      .then(res => res.json())
      .then(json => {
        setListTransactions(json)
      })
  }, [change])

  function handleAddFeedback(id) {
    navigation.navigate("/transaction-feedback", {
      id: id
    })
  }

  return (
    <div className="list-transactions">
      <div className="container">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">AMOUNT</th>
              <th scope="col">IP</th>
              <th scope="col">NUMBER</th>
              <th scope="col">REGION</th>
              <th scope="col">DATE</th>
              <th scope="col">RESULT</th>
              <th scope="col">FEEDBACK</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {listTransactions &&
              listTransactions.map(transaction => (
                <tr key={transaction.transactionId}>
                  <th scope="row">{transaction.transactionId}</th>
                  <td scope="row">{transaction.amount}</td>
                  <td scope="row">{transaction.ip}</td>
                  <td scope="row">{transaction.number}</td>
                  <td scope="row">{transaction.region}</td>
                  <td scope="row">{transaction.date}</td>
                  <td scope="row">{transaction.result}</td>
                  <td scope="row">{transaction.feedback}</td>
                  <td>
                    <button type="submit" onClick={() => handleAddFeedback(transaction.transactionId)} className="btn btn-danger mx-2" id="addButton">
                      Add feedback
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default TransactionHistory
