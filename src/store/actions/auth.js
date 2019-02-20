import * as actionTypes from "./actionTypes";
import { auth } from "../../firebase";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = user => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user
  };
};

export const authFail = err => {
  return {
    type: actionTypes.AUTH_FAIL,
    err
  };
};

export const logout = () => {
  console.log("logout");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

// Logging in
export const authCheck = user => {
  return dispatch => {
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(user => {
        dispatch(authSuccess(user));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const authState = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(authSuccess(user));
      } else {
        dispatch(logout());
      }
    });
  };
};

export const loggingOut = () => {
  return dispatch => {
    auth.signOut();
    dispatch(logout());
  };
};
