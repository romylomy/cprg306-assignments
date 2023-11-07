// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2aQ3T0mMkom-Sbb0en5L7BVgSYDMN-W4",
  authDomain: "cprg306-assignments-24a0f.firebaseapp.com",
  projectId: "cprg306-assignments-24a0f",
  storageBucket: "cprg306-assignments-24a0f.appspot.com",
  messagingSenderId: "169050047986",
  appId: "1:169050047986:web:9828436b3601b0d705d76b",
  measurementId: "G-M2NPDE70KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);