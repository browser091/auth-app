import { useMapState, useMapActions } from "../../../app/hooks";

import { userSelectors } from "../../../app/selectors";
import { userThunks } from "../../../app/thunks/";

export const useMappedState = () => {
  return useMapState((state) => {
    return {
      isAuth: userSelectors.getUserIsAuth(state),
      userName: userSelectors.getUserName(state),
      isLoginning:userSelectors.getIsLoginning(state)
    };
  });
};

export const useMappedActions = () => {
  return useMapActions({
    login: userThunks.login,
  });
};
