import axios from "axios"
import { Buffer } from "buffer"

const LOGIN_REST_API_URL = "http://localhost:28852/api/auth/login"
class LoginService {
  async login(username, password) {
    const base64encodedData = Buffer.from(`${username}:${password}`).toString("base64")

    const response = await axios.post(LOGIN_REST_API_URL, username, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64encodedData}`
      }
    })
    localStorage.setItem("Authorization", `Basic ${base64encodedData}`)
    localStorage.setItem("username", response.data.username)
    localStorage.setItem("role", response.data.role)
    window.location.href = "/"
  }
}
export default new LoginService()
