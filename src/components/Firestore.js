import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCEraGsrZpSeRCpQoQ2tKJJ9YDXYF9J0do",
  authDomain: "productos-83f81.firebaseapp.com",
  databaseURL: "https://productos-83f81.firebaseio.com",
  projectId: "productos-83f81",
  storageBucket: "productos-83f81.appspot.com",
  messagingSenderId: "980035150819",
  appId: "1:980035150819:web:d8fad5893e1066e418b6d6",
  measurementId: "G-JB3FCMKSRH"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase;
