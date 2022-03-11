import { useMapState } from "../../../app/hooks";

import { userSelectors } from "../../../app/selectors";

export const useMappedState = () => {
  return useMapState((state) => {
    return {
      isAuth: userSelectors.getUserIsAuth(state),
      isLoginning: userSelectors.getIsLoginning(state),
    };
  });
};
