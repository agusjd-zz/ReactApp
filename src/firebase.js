import * as firebase from "firebase/app";
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

export const getFirestore = firebase.firestore(app)