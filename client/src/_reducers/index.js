import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import request from "./requestReducer";
import response from "./responseReducer";

export default combineReducers({
  auth,
  alert,
  request,
  response,
});
