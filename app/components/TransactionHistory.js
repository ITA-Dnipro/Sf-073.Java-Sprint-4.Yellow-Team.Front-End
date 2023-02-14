import React, { useEffect, useContext } from "react"
import Page from "./Page"
import StateContext from "../StateContext"
import TransactionTable from "./TransactionTable"

function TransactionHistory() {
  return <TransactionTable />
}
export default TransactionHistory
