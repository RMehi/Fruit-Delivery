import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBZyfQt19-D8IuWimBzfi-OomFEIsYX6xA",
    authDomain: "restaurantapp-96081.firebaseapp.com",
    databaseURL: "https://restaurantapp-96081-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-96081",
    storageBucket: "restaurantapp-96081.appspot.com",
    messagingSenderId: "388629651968",
    appId: "1:388629651968:web:c72152b286538d0ba42ee5"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};