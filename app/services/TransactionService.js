import axios from "axios"

const TRANSACTION_REST_API_URL = "http://localhost:28852/api/antifraud"

class TransactionService {
  registerTransaction(amount, ip, number, region, date) {
    const base64encodedData = localStorage.getItem("Authorization")
    const transactionData = {
      amount: amount,
      ip: ip,
      number: number,
      region: region,
      date: date
    }
    axios.post(TRANSACTION_REST_API_URL + "/transaction", transactionData, {
      headers: {
        Authorization: base64encodedData
      }
    })
  }

  transactionHistoryRequest() {
    const base64encodedData = localStorage.getItem("Authorization")
    const transactionData = [
      {
        amount: amount,
        ip: ip,
        number: number,
        region: region,
        date: date
      }
    ]
    axios.get(TRANSACTION_REST_API_URL + "/history", transactionData, {
      headers: {
        Authorization: base64encodedData
      }
    })
  }
}
export default new TransactionService()
