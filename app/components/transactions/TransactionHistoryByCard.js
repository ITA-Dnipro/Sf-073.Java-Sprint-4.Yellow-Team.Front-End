import React, { Component } from "react"
import axios from "axios"

const LIST_TRANSACTIONS_API = "http://localhost:28852/api/antifraud/history/"
class TransactionHistoryByCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listTransactions: []
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const url = LIST_TRANSACTIONS_API + event.number
    const base64encodedData = localStorage.getItem("Authorization")
    event.preventDefault()
    const card = {
      number: this.state.number
    }
    console.log(card)
    axios.delete(url, {
      headers: {
        Authorization: base64encodedData
      }
    })
  }
  handleChange = event => {
    this.setState({ number: event.target.value })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="number" name="number" onChange={this.handleChange} />
            <button type="submit"> OK </button>
          </div>
        </form>
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

export default TransactionHistoryByCard
