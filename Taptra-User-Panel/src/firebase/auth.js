import { auth } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Register new user
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login existing user
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout user
export function logoutUser() {
  return signOut(auth);
}

// Auth state observer
export function onUserStateChange(callback) {
  return onAuthStateChanged(auth, callback);
}
