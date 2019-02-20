import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      console.log(action.user);
      return {
        user: action.user
      };
    default:
      return state;
  }
};

export default user;
