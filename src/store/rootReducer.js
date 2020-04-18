import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import users from "../modules/users/reducer";
import apiStatus from "../modules/users/apiStatusReducer";

const rootReducer = combineReducers({
  // short hand property names
  users,
  apiStatus,
  routing,
});

export default rootReducer;
