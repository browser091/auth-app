import {handleActions} from "redux-actions";

import {tableActions} from "../actions";

export const initialState = {
    data: {},
    isLoading: true,
};

const reducerMap = {
    [tableActions.loadStart]: (state, action) => {
        return {
            ...state,
            isLoading: true,
        };
    },
    [tableActions.loadSuccess]: (state, action) => {
        return {
            data: action.payload,
            isLoading: false,
        };
    },
    [tableActions.loadFailure]: (state, action) => {
        return {
            ...initialState,
            isLoading: false,
        };
    },
    [tableActions.updateRow]: (state, action) => {
        const {id, params} = action.payload
        return {
            ...state,
            data: {...state.data, [id]: {...state.data[id], ...params} },
        };
    },
};

export default handleActions(reducerMap, initialState);
