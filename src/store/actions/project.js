import axios from "../../axios-firebase";
import * as actionTypes from "./actionTypes";

export const setProjects = projects => {
  return {
    type: actionTypes.SET_PROJECTS,
    projects
  };
};

export const addProject = project => {
  return {
    type: actionTypes.ADD_PROJECT,
    project
  };
};

export const fetchProjects = () => {
  return dispatch => {
    axios.get("/project.json").then(response => {
      const projects = [];
      for (let key in response.data) {
        projects.push({
          id: key,
          ...response.data[key]
        });
      }
      dispatch(setProjects(projects));
    });
  };
};

export const saveProject = data => {
  return dispatch => {
    axios
      .post("/project.json", data)
      .then(repsonse => {
        dispatch(addProject(repsonse.project));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
