import axios from "axios"
import { Buffer } from "buffer"

const LOGIN_REST_API_URL = "http://localhost:28852/api/auth"
class LoginService {
  login(username, password) {
    const base64encodedData = Buffer.from(`${username}:${password}`).toString("base64")
    console.log(base64encodedData)
    const customAxios = axios.create({
      baseURL: LOGIN_REST_API_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64encodedData}`
      }
    })
    customAxios.interceptors.response.use(
      response => {
        window.location.href = "/logged"
        localStorage.setItem("Authorization", `Basic ${base64encodedData}`)
        localStorage.setItem("username", response.data.username)
        localStorage.setItem("role", response.data.role)
      },
      error => {
        alert(error)
        window.location.href = "/"
      }
    )
    customAxios.post("login", username)
  }
  //   const response = await axios.post(LOGIN_REST_API_URL, username, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Basic ${base64encodedData}`
  //     }
  //   })
  //   localStorage.setItem("Authorization", `Basic ${base64encodedData}`)
  //   localStorage.setItem("username", response.data.username)
  //   localStorage.setItem("role", response.data.role)
  //   window.location.href = "/logged"
  // }
}
export default new LoginService()
