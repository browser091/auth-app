import {useMapState} from "../../../../../app/hooks";

import { tableSelectors} from "../../../../../app/selectors";

export const useMappedState = () => {
    return useMapState((state) => {
        return {
            allCount: tableSelectors.getTableIds(state).length,
            selectedCount: tableSelectors.getSelectedItems(state),
        };
    });
};
