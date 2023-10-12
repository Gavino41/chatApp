// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import getFirestore from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCMqeXUBB2EkEmH1cYJDPeUPkMONKyUwoQ",
  authDomain: "rafachat-79ea9.firebaseapp.com",
  projectId: "rafachat-79ea9",
  storageBucket: "rafachat-79ea9.appspot.com",
  messagingSenderId: "916124361131",
  appId: "1:916124361131:web:0ccb86a0e33912d00432ee"
};

export const auth = initializeAuth(FIREBASE_APP, {persistence: getReactNativePersistence(AsyncStorage),})
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);