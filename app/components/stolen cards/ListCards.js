import React, { useEffect, useState } from "react"
import axios from "axios"

function ListCards() {
  const [listCards, setListCards] = useState()
  const [change, setChange] = useState()
  const LIST_CARDS_API = "http://localhost:28852/api/antifraud/stolencard"
  const DELETE_CARD_API = "http://localhost:28852/api/antifraud/stolencard/"

  useEffect(() => {
    const base64encodedData = localStorage.getItem("Authorization")
    fetch(LIST_CARDS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData
      }
    })
      .then(res => res.json())
      .then(json => {
        setListCards(json)
      })
  }, [change])

  function handleDelete(number) {
    const base64encodedData = localStorage.getItem("Authorization")
    console.log(number)
    axios
      .delete(DELETE_CARD_API + number, {
        headers: {
          Authorization: base64encodedData
        }
      })
      .then(setChange)
  }

  return (
    <div className="list-cards">
      <div className="containers">
        {listCards &&
          listCards.map(card => (
            <div key={card.id}>
              id: {card.id}
              <br />
              number: {card.number}
              <br />
              <button type="submit" onClick={() => handleDelete(card.number)} className="btn btn-success btn-sm">
                delete
              </button>
              <br></br>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ListCards