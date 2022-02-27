import Parse from "parse/dist/parse.min.js";

import { userActions } from "../../actions";

export const login =
  ({ username, password }) =>
  async (dispatch, getState) => {
    dispatch(userActions.loginStart());
    try {
      const currentUser = await Parse.User.logIn(username, password);
      console.log("currentUser", currentUser);
      // const currentUser = await Parse.User.current();

      dispatch(userActions.loginSuccess({ username, password, currentUser }));
      return true;
    } catch (error) {
      console.log("error", error);
      dispatch(userActions.loginFailure());
      return false;
    }
  };

export default login;
