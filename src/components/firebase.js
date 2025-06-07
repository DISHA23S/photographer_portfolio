// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDoh8MPyaraMDGrPUzXDHf9rZ5GqZEcdg",
  authDomain: "portfoliowebsite-cfba1.firebaseapp.com",
  projectId: "portfoliowebsite-cfba1",
  storageBucket: "portfoliowebsite-cfba1.firebasestorage.app",
  messagingSenderId: "639863572862",
  appId: "1:639863572862:web:66291fa773e4bb3e114b2f"
};

// Initialize Fireba

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
