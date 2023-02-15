import React, { useEffect, useState } from "react"
import axios from "axios"

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
            </tr>
          </thead>
          <tbody>
            {listTransactions &&
              listTransactions.map(transaction => (
                <tr key={transaction.transactionId}>
                  <th scope="row">{transaction.transactionId}</th>
                  <th scope="row">{transaction.amount}</th>
                  <th scope="row">{transaction.ip}</th>
                  <th scope="row">{transaction.number}</th>
                  <th scope="row">{transaction.region}</th>
                  <th scope="row">{transaction.date}</th>
                  <th scope="row">{transaction.result}</th>
                  <th scope="row">{transaction.feedback}</th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default TransactionHistory
