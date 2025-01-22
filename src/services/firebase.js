import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyC0q6xtKh9VIhDibAonAbl9GdQINla29Es",
  authDomain: "wraptee-6adb4.firebaseapp.com",
  projectId: "wraptee-6adb4",
  storageBucket: "wraptee-6adb4.firebasestorage.app",
  messagingSenderId: "918311126273",
  appId: "1:918311126273:web:61df0d62e3edf6c870c700",
  measurementId: "G-85EG883X1B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
