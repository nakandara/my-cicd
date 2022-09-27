// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRU5LuyliGFy_G5v3gcQLRPWeyobUJA0E",
  authDomain: "cicdnew.firebaseapp.com",
  projectId: "cicdnew",
  storageBucket: "cicdnew.appspot.com",
  messagingSenderId: "268180245587",
  appId: "1:268180245587:web:1ad2ae204b33358e8a0aa6",
  measurementId: "G-KJ07B2W2WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;