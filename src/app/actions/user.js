import { createAction } from "redux-actions";

const prefix = "USER:";

export const loginStart = createAction(prefix + "LOGIN_START");
export const loginSuccess = createAction(prefix + "LOGIN_SUCCESS");
export const loginFailure = createAction(prefix + "LOGIN_FAILURE");

export const login = createAction(prefix + "LOGIN");
export const logout = createAction(prefix + "LOGOUT");
