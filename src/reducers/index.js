import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import modalReducer from "./modal";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
  modal: modalReducer,
});

export default allReducers;
