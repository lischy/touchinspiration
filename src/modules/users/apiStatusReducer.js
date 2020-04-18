import * as types from "../../store/actionTypes";
import initialState from "../../store/initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.users,
  action
) {
  if (action.type === types.FETCHING) {
    return Object.assign({}, state, {
      loader: true,
    });
  } else if (
    action.type === types.FETCH_COMPLETE ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return Object.assign({}, state, {
      loader: false,
    });
  }

  return state;
}
