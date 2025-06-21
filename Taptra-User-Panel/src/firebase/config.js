import { initializeApp } from "firebase/app";
// Import other services as needed
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWBz_5xKpAsI00wL3tf1kVhE27H9R-Cs8",
  authDomain: "taptrabot.firebaseapp.com",
  databaseURL: "https://taptrabot-default-rtdb.firebaseio.com",
  projectId: "taptrabot",
  storageBucket: "taptrabot.firebasestorage.app",
  messagingSenderId: "650029120979",
  appId: "1:650029120979:web:920b629992c9d6d6ad8326",
  measurementId: "G-DX7YTHWS05",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// If you want to use Firebase Authentication and Firestore:
//// const auth = getAuth(app);
//// const db = getFirestore(app);

export { app };
// export { auth, db };
