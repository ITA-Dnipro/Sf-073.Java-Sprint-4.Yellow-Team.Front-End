import axios from "axios";

const REGISTER_REST_API_URL = "http://localhost:28852/api/auth/user";

class RegisterService {
  register(props) {
    let nameVal = document.getElementById("name-register").value;
    let usernameVal = document.getElementById("username-register").value;
    let passwordVal = document.getElementById("password-register").value;

    console.log(nameVal, usernameVal, passwordVal);

    return axios.post(REGISTER_REST_API_URL, {
      name: nameVal,
      username: usernameVal,
      password: passwordVal,
    });
  }
}
export default new RegisterService();
