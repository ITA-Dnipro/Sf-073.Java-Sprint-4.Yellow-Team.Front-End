import axios from "axios";
import { Buffer } from "buffer";

const REGISTER_REST_API_URL = "http://localhost:28852/api/auth/user";

class RegisterService {
  register(props) {
    let nameVal = props.name;
    let usernameVal = props.username;
    let passwordVal = props.password;

    console.log(nameVal, usernameVal, passwordVal);

    return axios
      .post(REGISTER_REST_API_URL, {
        nameVal,
        usernameVal,
        passwordVal,
      })
      .then((response) => {
        localStorage.setItem("Authorization", `Basic ${base64encodedData}`);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("role", response.data.role);
      });
  }
}
export default new RegisterService();
