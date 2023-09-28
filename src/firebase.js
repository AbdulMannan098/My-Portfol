// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA4x3LM5YVfXmDoHi0VNBaFpnIcdoXjaT8",
  authDomain: "my-portf-552d0.firebaseapp.com",
  projectId: "my-portf-552d0",
  storageBucket: "my-portf-552d0.appspot.com",
  messagingSenderId: "600768077319",
  appId: "1:600768077319:web:4c9664e69be3528752d4a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();