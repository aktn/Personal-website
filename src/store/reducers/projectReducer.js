import * as actionTypes from "./../actions/actionTypes";

const initialState = {
  project: [],
  loaded: false
};

export default function projects(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SET_PROJECTS:
      console.log(action.projects);
      return { project: action.projects };
    default:
      return state;
  }
}
