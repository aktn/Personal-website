import * as actionTypes from "./../actions/actionTypes";

const initialState = {
  project: [],
  loaded: false,
  error: false
};

export default function projects(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SET_PROJECTS:
      return {
        ...state,
        project: action.projects
      };

    case actionTypes.PROJECT_FETCHED:
      return {
        ...state,
        project: action.project
      };

    case actionTypes.UPDATE_PROJECT:
      return state.map(project =>
        project.id === action.id
          ? { ...project, project: action.project }
          : project
      );

    case actionTypes.ADD_PROJECT:
      const project = {
        title: action.title,
        description: action.description
      };
      return {
        ...state,
        project: state.project.concat(project)
      };

    default:
      return state;
  }
}
