import Parse from "parse/dist/parse.min.js";

import {userActions} from "../../actions";

export const login =
    ({username, password}) =>
        async (dispatch, getState) => {
            try {
                const user = await Parse.User.logIn(username, password);
                dispatch(userActions.setUser({username: user.get("username")}));

                return false
            } catch (error) {
                dispatch(userActions.resetUser());
                return error.message;
            }
        };

export default login;
