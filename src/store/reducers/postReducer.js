import * as actionTypes from "../actions/actionTypes";

const initialState = {
  post: [],
  loading: false
};

export default function posts(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_POST:
      const newPost = {
        title: action.title,
        body: action.body
      };
      return {
        ...state,
        post: state.post.concat(newPost),
        loading: false
      };
    case actionTypes.POST_FETCHED:
      console.log(action.post);
      return { ...state, post: action.post };
    case actionTypes.SET_POSTS:
      return action.posts;
    default:
      return state;
  }
}
