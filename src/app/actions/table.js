import {createAction} from "redux-actions";

const prefix = "TABLE:";

export const loadStart = createAction(prefix + "LOAD_START");
export const loadSuccess = createAction(prefix + "LOAD_SUCCESS");
export const loadFailure = createAction(prefix + "LOAD_FAILURE");

export const updateRow = createAction(prefix + "UPDATE_ROW");
