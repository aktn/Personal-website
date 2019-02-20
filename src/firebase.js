import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDYUXVHVw45sQEf4OWsTnRhzFLqLJ0Dq2Q",
  authDomain: "aung-khant-a04b5.firebaseapp.com",
  databaseURL: "https://aung-khant-a04b5.firebaseio.com",
  projectId: "aung-khant-a04b5",
  storageBucket: "aung-khant-a04b5.appspot.com",
  messagingSenderId: "321935315087"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
