import { SET_SORT } from "../constant/actionType";

export default (sort) => 
{
  return async(dispatch) =>{
    dispatch({
      type: SET_SORT,
      payload: { sort },
    });
  }
}

