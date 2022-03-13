import {useMapActions, useMapState} from "../../../app/hooks";

import { userSelectors, tableSelectors} from "../../../app/selectors";
import {tableThunks} from "../../../app/thunks";

export const useMappedState = () => {
  return useMapState((state) => {
    return {
      isAuth: userSelectors.getUserIsAuth(state),
      isLoginning: userSelectors.getIsLoginning(state),
      tableIds: tableSelectors.getTableIds(state),
    };
  });
};


export const useMappedActions = () => {
  return useMapActions({
    fetchData: tableThunks.fetchData,
  });
};
