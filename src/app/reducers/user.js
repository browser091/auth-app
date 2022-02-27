import { handleActions } from "redux-actions";

import { userActions } from "../actions";

export const initialState = {
  username: null,
  password: null,
  isAuth: false,
  currentUser: null,
  error:null
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
[userActions.loginFailure]:(state, action)=>{
    return{
      ...state,
      error: action.payload.error.message
    }
}
};

export default handleActions(reducerMap, initialState);
