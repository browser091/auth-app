import {useMapActions} from "../../../../../app/hooks";

import {tableActions} from "../../../../../app/actions";


export const useMappedActions = () => {
    return useMapActions({
        updateRow: tableActions.updateRow,
    });
};
