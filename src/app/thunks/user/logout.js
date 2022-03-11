import Parse from "parse/dist/parse.min.js";

import { userActions } from "../../actions";

export const logout = () => async (dispatch, getState) => {
  try {
    await Parse.User.logOut();
    dispatch(userActions.resetUser());
    return true;
  } catch (error) {
    console.log("error", error);
    return false;
  }
};

export default logout;
