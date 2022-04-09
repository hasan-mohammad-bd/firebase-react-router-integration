// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY0UZ6uhvGAZl8h7QeHpPIHNKcdYv-zUQ",
  authDomain: "router-firebase-integrat-bfb4f.firebaseapp.com",
  projectId: "router-firebase-integrat-bfb4f",
  storageBucket: "router-firebase-integrat-bfb4f.appspot.com",
  messagingSenderId: "14628865925",
  appId: "1:14628865925:web:ae6131edc0e13aa5b226ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;