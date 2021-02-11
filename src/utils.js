

export const generateFilters = function (dataList) {
    const filterList = [];
    for (const property in dataList[0]) {
        filterList.push(property);
    }
    return filterList;
}