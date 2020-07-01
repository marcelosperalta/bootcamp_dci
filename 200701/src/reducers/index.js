// 3. step
// importing every reducer has been created
import counter from "./counter";
import userLog from "./login";

import { combineReducers } from "redux";
// combining all the reducers in one reducer
const allReducers = combineReducers({
    counter,
    userLog,
});

export default allReducers;