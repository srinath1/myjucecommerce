// import firebase from "firebase/compat/app";
// // import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";
// import{getAuth,GoogleAuthProvider} from 'firebase/auth'
 
// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_kp39crRERrg_bMdTOiVrn4pB5TJuc_0",
  authDomain: "myjucecoomerce.firebaseapp.com",
  projectId: "myjucecoomerce",
  storageBucket: "myjucecoomerce.appspot.com",
  messagingSenderId: "122252922550",
  appId: "1:122252922550:web:ee75d7d48c61469d602017"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();