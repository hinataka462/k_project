import axios from "axios";

const API_URL = "http://localhost:8081/api/users";

export default {
  getUsers() {
    return axios.get(API_URL);
  },
  createUser(user) {
    return axios.post(API_URL, user);
  },
};
