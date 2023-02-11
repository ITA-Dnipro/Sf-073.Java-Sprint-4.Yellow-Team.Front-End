import axios from "axios";
import { Buffer } from "buffer";

const LOGIN_REST_API_URL = "http://localhost:28852/api/auth/login";
class LoginService {

  login(username, password) {
    const base64encodedData = Buffer.from(`${username}:${password}`).toString(
      "base64"
    );

    return axios
      .post(LOGIN_REST_API_URL, username, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${base64encodedData}`,
        },
      })
      .then((response) => {
        localStorage.setItem("Authorization", `Basic ${base64encodedData}`);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("role", response.data.role);
        window.location.href = '/users';
      });
  }
}
export default new LoginService();
