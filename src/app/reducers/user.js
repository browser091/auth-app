import {handleActions} from "redux-actions";

import {userActions} from "../actions";

export const initialState = {
    username: null,
    isLoginning: true,
};

const reducerMap = {
    [userActions.setUser]: (state, action) => {
        return {
            ...action.payload,
        };
    },
    [userActions.resetUser]: () => {
        return {...initialState, isLoginning: false}
    },
    [userActions.initUserStart]: (state) => {
        return {...state, isLoginning: true}
    },
    [userActions.initUserFinish]: (state) => {
        return {...state, isLoginning: false}
    },
};

export default handleActions(reducerMap, initialState);
