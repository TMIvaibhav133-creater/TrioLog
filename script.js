// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBApHAmSB3WKA2XxC-9MVeeOx1qDszQ8nM",
  authDomain: "teacher-attendance-app-87734.firebaseapp.com",
  projectId: "teacher-attendance-app-87734",
  storageBucket: "teacher-attendance-app-87734.firebasestorage.app",
  messagingSenderId: "917246619885",
  appId: "1:917246619885:web:9e3b0eeec1c490be849ce4",
  measurementId: "G-M6FTJJKN1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (app) {
  console.log("✅ Firebase initialized successfully!");
} else {
  console.log("❌ Firebase initialization failed!");
}