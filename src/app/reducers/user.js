import { handleActions } from "redux-actions";

import { userActions } from "../actions";

export const initialState = {
  username: null,
  password: null,
  isAuth: false,
  currentUser: null,
};

const reducerMap = {
  [userActions.loginSuccess]: (state, action) => {
    return {
      ...state,
      ...action.payload,
      isAuth: true,
    };
  },
  [userActions.logout]: (state, action) => {
    return {
      ...initialState,
    };
  },
};

export default handleActions(reducerMap, initialState);
