import { createAction } from "redux-actions";

const prefix = "USER:";

export const loginStart = createAction(prefix + "LOGIN_START");
export const loginSuccess = createAction(prefix + "LOGIN_SUCCESS");
export const loginFailure = createAction(prefix + "LOGIN_FAILURE");

export const setUser=createAction(prefix+'SET_USER')
export const resetUser=createAction(prefix+'RESET_USER')

export const initUserStart=createAction(prefix+'INIT_USER_START')
export const initUserFinish=createAction(prefix+'INIT_USER_FINISH')

export const login = createAction(prefix + "LOGIN");
export const logout = createAction(prefix + "LOGOUT");
