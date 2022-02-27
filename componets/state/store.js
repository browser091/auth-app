import {combineReducers, createStore, applyMiddleware} from "redux";
import { devToolsEnhancer } from '@redux-devtools/extension';

import authReducer from "./authReducer";


let reducers = combineReducers({
       authUser: authReducer,
});


const store = createStore(
    reducers,
    devToolsEnhancer()
);

export default store;
