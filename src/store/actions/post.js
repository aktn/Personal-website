import axios from "../../axios-firebase";
import * as actionTypes from "./actionTypes";
import firebase from "../../firebase";

export const setPosts = posts => {
  return {
    type: actionTypes.SET_POSTS,
    posts
  };
};

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
    axios
      .post("/post.json", data)
      .then(repsonse => {
        dispatch(addPost(repsonse.post));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export const fetchPosts = () => {
  return dispatch => {
    axios
      .get("/post.json")
      .then(response => {
        const posts = [];
        for (let key in response.data) {
          posts.push({
            ...response.data[key],
            id: key
          });
        }

        dispatch(setPosts(posts));
      })
      .catch(error => {
        //dispatch(fetchInfoFail(error));
        console.log(error);
      });
  };
};

export function fetchPost(id) {
  return dispatch => {
    axios
      .get(`/post/${id}.json`)
      //.then(response => response.json())
      .then(response => {
        dispatch(postFetched(response.data));
      });
  };
}
