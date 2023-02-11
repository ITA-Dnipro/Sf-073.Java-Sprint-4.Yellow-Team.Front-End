import axios from "axios";

const REGISTER_REST_API_URL = "http://localhost:28852/api/auth/user";

class RegisterService {
  register(name,username,password) {
    return axios.post(REGISTER_REST_API_URL, {
      name: name,
      username: username,
      password: password,
    });
  }
}
export default new RegisterService();
