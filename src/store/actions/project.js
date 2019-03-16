import axios from "../../axios-firebase";
import * as actionTypes from "./actionTypes";
import firebase from "firebase";

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

export const getProject = project => {
  return {
    type: actionTypes.PROJECT_FETCHED,
    project
  };
};

export const editProject = project => {
  return {
    type: actionTypes.UPDATE_PROJECT,
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
    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user.uid);
      axios
        .post("/project/" + user.uid + ".json", data)
        .then(repsonse => {
          dispatch(addProject(repsonse.project));
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
};

export const fetchProject = id => {
  return dispatch => {
    axios.get(`/project/${id}.json`).then(response => {
      dispatch(getProject(response.data));
    });
  };
};

export const updateProject = (id, data) => {
  return dispatch => {
    axios
      .put(`/project/${id}.json`, data)
      .then(response => {
        console.log(response.data);
        dispatch(editProject(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
