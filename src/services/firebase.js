import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyAM8FZZo0qgz8FttWGRKPZu9h4o3g3CPoc",
  authDomain: "chatty-bfa0f.firebaseapp.com",
  databaseURL: "https://chatty-bfa0f.firebaseapp.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
