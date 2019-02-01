import * as actionTypes from "../actions/actionTypes";

const initialState = {
  title: null,
  body: null,
  loading: false
};

export default function posts(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        title: action.title,
        body: action.body
      };
    case actionTypes.POST_FETCHED:
      return [...state, action.post];
    case actionTypes.SET_POSTS:
      console.log("set");
      return action.posts;
    default:
      console.log("def");
      return state;
  }
}
