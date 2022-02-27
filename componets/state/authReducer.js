const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

let initialState = {
    id: null,
    username: null,
    password: null,
    isAuth: false,
    currentUser:null

};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.password = action.payload.password
            state.isAuth = true
            return {
                state
            };
        case LOGOUT:
            state.id = null
            state.username = null
            state.password = null
            state.isAuth = false
            return {
                state
            };
        default:
            return state;
    }
};
export const logInActionCreator = (id, password, username) => {
    return {
        type: LOGIN,
        id: id,
        password: password,
        username: username,
    };
};

export const logOutActionCreator = () => {
    return {
        type: LOGOUT,

    };
};

export default authReducer