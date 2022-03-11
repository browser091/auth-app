import {useMapActions, useMapState} from "../../app/hooks";

import { userSelectors } from "../../app/selectors";
import {userThunks} from "../../app/thunks";

export const useMappedState = () => {
    return useMapState((state) => {
        return {
            userName: userSelectors.getUserName(state),
        };
    });
};


export const useMappedActions = () => {
    return useMapActions({
        logout: userThunks.logout,
    });
};