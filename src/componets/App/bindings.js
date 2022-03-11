import {useMapActions} from "../../app/hooks";

import {userThunks} from "../../app/thunks/";


export const useMappedActions = () => {
    return useMapActions({
        initUser: userThunks.initUser,
    });
};
