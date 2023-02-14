import React, { Component } from "react"
import axios from "axios"

const DELETE_CARD_API = "http://localhost:28852/api/antifraud/stolencard/"
class DeleteCard extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const url = DELETE_CARD_API + event.card
    const base64encodedData = localStorage.getItem("Authorization")
    event.preventDefault()
    const card = {
      card: this.state.card
    }
    console.log(card)
    axios.delete(DELETE_CARD_API + this.state.card, {
      headers: {
        Authorization: base64encodedData
      }
    })
  }
  handleChange = event => {
    this.setState({ card: event.target.value })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="card" onChange={this.handleChange} />
        <button type="submit"> DELETE </button>
      </form>
    )
  }
}

export default DeleteCard
