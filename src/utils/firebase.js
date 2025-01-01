// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCP3bKmhc981TpKbxn8BLuOja24MsUSSM",
  authDomain: "netflixai-95433.firebaseapp.com",
  projectId: "netflixai-95433",
  storageBucket: "netflixai-95433.firebasestorage.app",
  messagingSenderId: "812260079184",
  appId: "1:812260079184:web:d1078c87afb1809d9a4355",
  measurementId: "G-JKLR060SW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();