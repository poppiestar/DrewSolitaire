
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const setVisibilityFilter = (filter: string) => ({
    payload: filter,
    type: SET_VISIBILITY_FILTER
});
