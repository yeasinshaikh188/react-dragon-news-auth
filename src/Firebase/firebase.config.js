// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKTpKarWO6cJ8a5oRykps4VARMme7VNpg",
  authDomain: "react-dragon-news-auth-b9f84.firebaseapp.com",
  projectId: "react-dragon-news-auth-b9f84",
  storageBucket: "react-dragon-news-auth-b9f84.appspot.com",
  messagingSenderId: "186854921692",
  appId: "1:186854921692:web:7080bf5a1da2a14d956b19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 