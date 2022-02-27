import Parse from "parse/dist/parse.min.js";

import { userActions } from "../../actions";

export const logout = () => async (dispatch, getState) => {
  try {
    const currentUser = await Parse.User.logOut();
    console.log("currentUser", currentUser);
    // const currentUser = await Parse.User.current();

    dispatch(userActions.logout());
    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

export default logout;
