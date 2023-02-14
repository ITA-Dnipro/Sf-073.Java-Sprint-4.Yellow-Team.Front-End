import React, { Component } from "react"
import axios from "axios"

const LIST_TRANSACTIONS_API = "http://localhost:28852/api/antifraud/history"
class TransactionHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listTransactions: []
    }
  }

  componentDidMount() {
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
        this.setState({
          listTransactions: json
        })
      })
  }

  render() {
    if (this.state.listTransactions[0] != null) {
      return (
        <div>
          <div className="container">
            {this.state.listTransactions.map(transaction => (
              <div key={transaction.id}>
                {transaction.transactionId}
                <br />
                {transaction.amount}
                <br />
                {transaction.number}
                <br />
                {transaction.region}
                <br />
                {transaction.date}
                <br />
                {transaction.result}
                <br />
                {transaction.feedback}
                <br />
              </div>
            ))}
          </div>
        </div>
      )
    }
  }
}
export default TransactionHistory
