import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  error: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case actionTypes.AUTH_LOGOUT:
      console.log("logout");
      return {
        ...state,
        user: null
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        user: null,
        error: action.err.message
      };
    default:
      return state;
  }
};

export default user;
