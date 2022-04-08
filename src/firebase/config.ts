import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz9RGISqpbq-DYM9UEWbLrDPdjIE7mntE",
  authDomain: "kanban-97aa3.firebaseapp.com",
  projectId: "kanban-97aa3",
  storageBucket: "kanban-97aa3.appspot.com",
  messagingSenderId: "681741127098",
  appId: "1:681741127098:web:74f46491bc9f6246412183",
  measurementId: "G-PKHXSFZHSH"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
// const timestamp = firestore.FieldValue.serverTimestamp
// const analytics = getAnalytics(firebaseApp);