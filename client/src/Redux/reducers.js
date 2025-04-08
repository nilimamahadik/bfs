import { combineReducers } from "redux";
import candidateReducer from "./candidateReducer";
import employeeReducer from "./employeeReducer";
import adminReducer from "./adminReducer";
import { USER_LOGOUT } from "./actions";
const appReducer = combineReducers({
  candidate: candidateReducer,
  employee: employeeReducer,
  data: adminReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    localStorage.removeItem("persist:root");
    localStorage.clear();
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
