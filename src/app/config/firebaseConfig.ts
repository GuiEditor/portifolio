// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjHQS4QGefMkNyKGV0aQc_a2-dmAYXpSw",
  authDomain: "portfolio-9b4f7.firebaseapp.com",
  projectId: "portfolio-9b4f7",
  storageBucket: "portfolio-9b4f7.appspot.com",
  messagingSenderId: "735681895347",
  appId: "1:735681895347:web:9b9320bfa8b5c3b1da49c6"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

export default fire;