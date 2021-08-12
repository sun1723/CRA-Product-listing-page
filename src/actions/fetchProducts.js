import { FETCH_PRODUCT } from "../constant/actionType";
import axios from "axios";
import { options } from "../services/searchApi";

const fetchProducts = (content) => {
  return async (dispatch) => {
    const targets = {
      ...options,
      params: { query: content, page: "1" },
    };
    console.log(targets);
    await axios
      .request(targets)
      .then()
      .then((data) => {
        // console.log(data.data.data);
        dispatch({
          type: FETCH_PRODUCT,
          payload: data.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export default fetchProducts;
