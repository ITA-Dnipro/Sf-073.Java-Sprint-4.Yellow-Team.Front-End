import React, { useState, Component } from "react"
import axios from "axios"

const LIST_TRANSACTIONS_API = "http://localhost:28852/api/antifraud/history"
function TransactionHistoryRequest() {
  const base64encodedData = localStorage.getItem("Authorization")
  console.log(base64encodedData)
  fetch(LIST_TRANSACTIONS_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: base64encodedData
    }
  })
    .then(res => res.json())
    .then(json => {
      this.setState({
        listTransactions: json
      })
    })
  return this.state.listTransactions
}
export default TransactionHistoryRequest
