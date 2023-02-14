import React, { useEffect, useState } from "react";
import axios from "axios";

function TransactionHistoryByCard() {
  const [listTransactions, setListTransactions] = useState();
  const [change, setChange] = useState();
  const [card_number, setNumber] = useState();
  const LIST_TRANSACTIONS_API = "http://localhost:28852/api/antifraud/history/";

  function getListOfTransactions() {
    const base64encodedData = localStorage.getItem("Authorization");
    fetch(LIST_TRANSACTIONS_API + card_number, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setListTransactions(json);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      getListOfTransactions();
    } catch (e) {
      alert("There was an error.");
      console.log("There was an error.");
    }
  }

  return (
    <div className="container">
      <div className="list-transactions">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="number" name="number" onChange={(e) => setNumber(e.target.value)} />
            <button type="submit"> OK </button>
          </div>
        </form>
        <div className="containers">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">IP</th>
                <th scope="col">NUMBER</th>
                <th scope="col">REGION</th>
                <th scope="col">DATE</th>
              </tr>
            </thead>
            <tbody>
              {listTransactions &&
                listTransactions.map((transaction) => (
                  <tr>
                    <th scope="row" key={transaction.transactionId}>
                      {transaction.transactionId}
                    </th>
                    <th scope="row">{transaction.amount}</th>
                    <th scope="row">{transaction.ip}</th>
                    <th scope="row">{transaction.number}</th>
                    <th scope="row">{transaction.region}</th>
                    <th scope="row">{transaction.date}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default TransactionHistoryByCard;
