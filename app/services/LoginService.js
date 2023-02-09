import axios from "axios";
import { Buffer } from "buffer";

const LOGIN_REST_API_URL = "http://localhost:28852/api/auth/list";

class LoginService {
  login() {
    let usernameVal = document.getElementById("username").value;
    let passwordVal = document.getElementById("password").value;

    const base64encodedData = Buffer.from(`${usernameVal}:${passwordVal}`).toString("base64");

    console.log(base64encodedData);
    fetch(LOGIN_REST_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64encodedData}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        localStorage.setItem("Authorization", `Basic ${base64encodedData}`);
        window.location.reload();
      });

    // function getJWT(response) {
    //   localStorage.setItem("jwt_token", "Bearer " + response.data.jwt);
    // }
    // return axios.post(LOGIN_REST_API_URL, userLogin).then((response) => {
    //   getJWT(response);
    //   window.location.href = "http://localhost:3000";
    //   });
  }
}
export default new LoginService();
