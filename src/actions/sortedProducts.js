import { SET_SORT } from "../constant/actionType";

const setSort= (sort) => 
{
  return async(dispatch) =>{
    dispatch({
      type: SET_SORT,
      payload: { sort },
    });
  }
}

export {setSort};

