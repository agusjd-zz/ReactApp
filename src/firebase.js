// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiGCdO-ABXSr48JTM62b2u97OHeDmz-aI",
    authDomain: "grusliapp.firebaseapp.com",
    projectId: "grusliapp",
    storageBucket: "grusliapp.appspot.com",
    messagingSenderId: "737224983578",
    appId: "1:737224983578:web:43248c1b57b468a40e3da3",
    measurementId: "G-MZWP2RNWET"
  };

const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore() {
  return firebase.firestore(app);
}