import { useMapState, useMapActions } from "../../../app/hooks";

import { userSelectors } from "../../../app/selectors";
import { userActions } from "../../../app/actions";
import { userThunks } from "../../../app/thunks/";

export const useMappedState = () => {
  return useMapState((state) => {
    return {
      isAuth: userSelectors.getUserIsAuth(state),
      userName: userSelectors.getUserName(state),
    };
  });
};

export const useMappedActions = () => {
  return useMapActions({
    login: userThunks.login,
    logout: userThunks.logout,
  });
};
