// Nexa Line Ltd — Firebase connection (these values are public by design; data is protected by Firestore security rules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZTcyISHcy4uTPn3WnrO6AQp95iySv69o",
  authDomain: "nexa-line.firebaseapp.com",
  projectId: "nexa-line",
  storageBucket: "nexa-line.firebasestorage.app",
  messagingSenderId: "886057270492",
  appId: "1:886057270492:web:aebcc469ca78fcd0218819"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
