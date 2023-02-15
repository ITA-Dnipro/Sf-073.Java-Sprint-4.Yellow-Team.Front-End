import React, { useState } from "react"
import axios from "axios"
import TransactionService from "../../services/TransactionService"
import { Link, Routes, Route, useNavigate } from "react-router-dom"

function TransactionFeedback() {
  const [id, setID] = useState()
  const [feedback, setFeedback] = useState()

  const navigate = useNavigate()

  const feedbackStatus = [
    {
      label: "ALLOWED",
      value: "ALLOWED"
    },
    {
      label: "MANUAL PROCESSING",
      value: "MANUAL_PROCESSING"
    },
    {
      label: "PROHIBITED",
      value: "PROHIBITED"
    }
  ]

  function handleSubmit(e) {
    e.preventDefault()
    TransactionService.addFeedback(id, feedback)
    e.target.reset()
  }

  return (
    <div className="container">
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
          <select className="form-control" id="value-feedback" name="feedback" value={feedbackStatus.value} onChange={e => setFeedback(e.target.value)}>
            {feedbackStatus.map(status_feedback => (
              <option value={status_feedback.value}>{status_feedback.label}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
          Add feedback
        </button>
      </form>
    </div>
  )
}

export default TransactionFeedback
