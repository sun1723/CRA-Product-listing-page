import { SET_SORT } from "../constant/actionType";

export const setSort = (sort) => ({
  type: SET_SORT,
  payload: { sort },
});
