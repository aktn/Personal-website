import firebase from "firebase";

const config = {
  //Firebase config
};

firebase.initializeApp(config);

export const auth = firebase.auth();
