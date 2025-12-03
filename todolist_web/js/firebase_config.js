// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCkKDJqPq99tmpYp7CC65F6tOfMADjmdo",
    authDomain: "jsi40-37a84.firebaseapp.com",
    projectId: "jsi40-37a84",
    storageBucket: "jsi40-37a84.firebasestorage.app",
    messagingSenderId: "858855372279",
    appId: "1:858855372279:web:c1a584b850f0a47f216af2",
    measurementId: "G-92CRFHTH0M"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);