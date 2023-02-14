import React, { useState } from "react"
import axios from "axios"
import TransactionService from "../../services/TransactionService"
import { Link, Routes, Route, useNavigate } from "react-router-dom"

function TransactionFeedback() {
  const [id, setID] = useState()
  const [feedback, setFeedback] = useState()

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    try {
      TransactionService.addFeedback(id, feedback)
      console.log("Feedback was successfully added.")
      alert("Feedback was successfully added.")
      navigate("/")
    } catch (e) {
      alert("There was an error.")
      console.log("There was an error.")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="id-feedback" className="text-muted mb-1">
          <small>ID</small>
        </label>
        <input onChange={e => setID(e.target.value)} id="id-feedback" name="id" className="form-control" type="number" placeholder="Set an id" autoComplete="off" />
      </div>
      <div className="form-group">
        <label htmlFor="value-feedback" className="text-muted mb-1">
          <small>Feedback</small>
        </label>
        <input onChange={e => setFeedback(e.target.value)} id="value-feedback" name="feedback" className="form-control" type="text" placeholder="Set a feedback" autoComplete="off" />
      </div>
      <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
        Add feedback
      </button>
    </form>
  )
}

export default TransactionFeedback
