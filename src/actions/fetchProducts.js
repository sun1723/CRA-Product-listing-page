import { FETCH_PRODUCT } from "../constant/actionType";
import axios from "axios";
import options from "../services";

export const fetchProducts = (content) => {
  return async (dispatch) => {
    const targets = {
      ...options,
      params: { query: { content }, page: "1" },
    };

    await axios
      .request(targets)
      .then((res) => {
        dispatch({
          type: "FETCH_PRODUCT",
          payload: res.data.searchResult.mods.itemList,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
