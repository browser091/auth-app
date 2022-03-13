import {combineReducers} from "@reduxjs/toolkit";

import userReducer from "./reducers/user";
import tableReducer from "./reducers/table";

const rootReducer = combineReducers({
    user: userReducer,
    table: tableReducer,
});

export default rootReducer;
