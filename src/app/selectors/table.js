export const getTable= (store) => store.table;

export const getTableData = (state) => getTable(state).data;
export const getIsLoading = (state) => getTable(state).isLoading;
export const getTableIds = (state) => Object.keys(getTableData(state));
export const getItemById = (state, id) => getTableData(state)[id];
export const getSelectedItems = (state) => {
    const allItems = getTableData(state)

    return Object.keys(allItems).filter(item => allItems[item].isSelected).length
}
