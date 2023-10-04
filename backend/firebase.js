// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMqeXUBB2EkEmH1cYJDPeUPkMONKyUwoQ",
  authDomain: "rafachat-79ea9.firebaseapp.com",
  projectId: "rafachat-79ea9",
  storageBucket: "rafachat-79ea9.appspot.com",
  messagingSenderId: "916124361131",
  appId: "1:916124361131:web:0ccb86a0e33912d00432ee"
};

const auth = firebase.auth;

// Initialize Firebase
const app = initializeApp(firebaseConfig);