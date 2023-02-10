import axios from "axios";
import { Buffer } from "buffer";

const LOGIN_REST_API_URL = "http://localhost:28852/api/auth/login";

class LoginService {
  login() {
    let usernameVal = document.getElementById("username").value;
    let passwordVal = document.getElementById("password").value;

    const base64encodedData = Buffer.from(
      `${usernameVal}:${passwordVal}`
    ).toString("base64");

    console.log(base64encodedData);
    // fetch(LOGIN_REST_API_URL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Basic ${base64encodedData}`,
    //   },
    //   body: usernameVal,
    // }).then((response) => {
    //   localStorage.setItem("Authorization", `Basic ${base64encodedData}`);
    //   console.log(response);
    //   localStorage.setItem("username", response.data.username);
    //   localStorage.setItem("role", response.data.role);
    //   //window.location.reload();
    // });

    return axios
      .post(LOGIN_REST_API_URL, usernameVal, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${base64encodedData}`,
        },
      })
      .then((response) => {
        localStorage.setItem("Authorization", `Basic ${base64encodedData}`);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("role", response.data.role);
      });
  }
}
export default new LoginService();
