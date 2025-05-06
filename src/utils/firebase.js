// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDHrOIFeFPWmV0Dt6uHE0Gra8p6XdwF0U",
  authDomain: "netflix-gpt-e1625.firebaseapp.com",
  projectId: "netflix-gpt-e1625",
  storageBucket: "netflix-gpt-e1625.firebasestorage.app",
  messagingSenderId: "556779866073",
  appId: "1:556779866073:web:a130b2db0db53556ba3bc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
