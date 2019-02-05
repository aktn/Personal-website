import * as actionTypes from "../actions/actionTypes";

const initialState = {
  info: [],
  // title: null,
  // description: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INFO_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_INFO_SUCCESS:
      console.log(action.info);
      return {
        info: action.info,
        // title: action.info[0].info.title,
        // description: action.info.description,
        loading: false
      };
    case actionTypes.FETCH_INFO_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
