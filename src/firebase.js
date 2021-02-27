// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxIav85R25M-D2cyucNUEXvGth-EmuZN8",
  authDomain: "gruslidiet.firebaseapp.com",
  projectId: "gruslidiet",
  storageBucket: "gruslidiet.appspot.com",
  messagingSenderId: "442623935122",
  appId: "1:442623935122:web:8dd6c48774363e8f7a9c4b",
  measurementId: "G-CPDLK934N5"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app)
}