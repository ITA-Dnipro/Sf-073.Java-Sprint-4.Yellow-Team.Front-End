import React, { useEffect, useContext } from "react"
import Page from "./Page"
import StateContext from "../StateContext"

function Home() {
  const appState = useContext(StateContext)

  return (
    <Page title="Your Feed">
      <h2 className="text-center">
        Hello <strong></strong>, User!
      </h2>
      <p className="lead text-muted text-center">Select operation from header</p>
    </Page>
  )
}

export default Home
