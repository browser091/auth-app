import {useMapActions, useMapState} from "../../../../../app/hooks";

import {tableSelectors} from "../../../../../app/selectors";
import {tableActions} from "../../../../../app/actions";

export const useMappedState = ({id}) => {
    return useMapState((state) => {
        return {
            item: tableSelectors.getItemById(state, id),
        };
    });
};


export const useMappedActions = () => {
    return useMapActions({
        updateRow: tableActions.updateRow,
    });
};
