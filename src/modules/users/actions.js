import usersApi from "../.././api/usersApi";
import * as action from "./actionCreators";

export function getUsers() {
  return function (dispatch) {
    dispatch(action.fetching());
    return usersApi
      .getUsers()
      .then((response) => {
        dispatch(action.fetchComplete());
        dispatch(action.getUsersSuccess(response));
      })
      .catch((error) => {
        dispatch(action.dispatchGeneralError(error));
      });
  };
}
export function getUSerByID(id) {
  return function (dispatch) {
    dispatch(action.fetching());
    return usersApi.getUserByID(id).catch((error) => {
      dispatch(action.dispatchGeneralError(error));
    });
  };
}
export function addUser(user) {
  return function (dispatch) {
    return usersApi
      .addUser(user)
      .then((savedUser) => {
        usersApi.id
          ? dispatch(action.updateUserSuccess(savedUser))
          : dispatch(action.addUserSuccess(savedUser));
      })
      .catch((error) => {
        dispatch(action.dispatchGeneralError(error));
      });
  };
}
