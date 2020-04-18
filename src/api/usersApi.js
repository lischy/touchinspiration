import { apiWrapper } from "./ApiFunctions";

class UsersApi {
  static getUsers() {
    const url = "https://ti-react-test.herokuapp.com/users";
    return apiWrapper("GET", url, {});
  }
  static getUserByID(id) {
    const url = "https://ti-react-test.herokuapp.com/users/" + id;
    return apiWrapper("GET", url, {});
  }
  static addUser(user) {
    const url = "https://ti-react-test.herokuapp.com/users/" + (user.id || "");
    return apiWrapper(user.id ? "PATCH" : "POST", url, { user });
  }
}

export default UsersApi;
