// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdr4Ln2grmqcNOSwhp-e0Dp2xWht_I9O8",
    authDomain: "family-tree-994ea.firebaseapp.com",
    projectId: "family-tree-994ea",
    storageBucket: "family-tree-994ea.appspot.com",
    messagingSenderId: "329379748316",
    appId: "1:329379748316:web:8bc822ce74bdda38449719"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);