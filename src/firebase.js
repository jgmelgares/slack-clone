import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-5SMXnyTL1tXbennDXRaURpas_LIkzFo",
    authDomain: "slack-clone-97485.firebaseapp.com",
    databaseURL: "https://slack-clone-97485.firebaseio.com",
    projectId: "slack-clone-97485",
    storageBucket: "slack-clone-97485.appspot.com",
    messagingSenderId: "617677588142",
    appId: "1:617677588142:web:83c3b49f85387a0fc38f3f",
    measurementId: "G-D6SVR3075G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;