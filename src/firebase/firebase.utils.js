import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAK-95L-h-uRPlEksvVSqOgosGqh1AKs9A",
    authDomain: "react-project-db-d53ea.firebaseapp.com",
    projectId: "react-project-db-d53ea",
    storageBucket: "react-project-db-d53ea.appspot.com",
    messagingSenderId: "327004146633",
    appId: "1:327004146633:web:6e5730afb370f776e47618",
    measurementId: "G-1Y3VDB189Z"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;