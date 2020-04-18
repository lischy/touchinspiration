import * as types from "../../store/actionTypes";
import initialState from "../../store/initialState";

export default function UsersReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.FETCHING:
      return Object.assign({}, state, {
        loader: true,
      });
    case types.FETCH_COMPLETE:
      return Object.assign({}, state, {
        loader: false,
      });
    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        list: action.users,
      });
    case types.ADD_USER_SUCCESS:
      return { ...state, list: action.user };
    case types.UPDATE_USER_SUCCESS:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      );
    case types.GENERAL_ERROR:
      return Object.assign({}, state, {
        loader: false,
      });
    default:
      return state;
  }
}
