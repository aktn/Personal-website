import axios from "../../axios-firebase";
import * as actionTypes from "./actionTypes";

export function setPosts(posts) {
  return {
    type: actionTypes.SET_POSTS,
    posts
  };
}

export function addPost(post) {
  return {
    type: actionTypes.ADD_POST,
    post
  };
}

export function postFetched(post) {
  return {
    type: actionTypes.POST_FETCHED,
    post
  };
}

export function savePost(data) {
  return dispatch => {
    axios.post("/post.json", data).then(repsonse => {
      dispatch(addPost(repsonse.post));
    });
  };
}

export function fetchPosts() {
  return dispatch => {
    axios.get("/post.json").then(response => {
      dispatch(setPosts(response));
    });
  };
}

export function fetchPost(id) {
  return dispatch => {
    axios.get(`/info/${id}.json`).then(response => {
      dispatch(postFetched(response));
    });
  };
}
