import Parse from "parse/dist/parse.min.js";

import {userActions} from "../../actions";

export const initUser =
    () =>
        async (dispatch, getState) => {
            try {
                dispatch(userActions.initUserStart());
                const currentUser = await Parse.User.current();
                if(currentUser){
                    dispatch(userActions.setUser({username: currentUser.get("username")}));
                }
                dispatch(userActions.initUserFinish());

            } catch (error) {
                dispatch(userActions.resetUser());
                dispatch(userActions.initUserFinish());

            }
        };

export default initUser;
