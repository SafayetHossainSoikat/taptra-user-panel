import { getDatabase, ref, set, get, update, remove, onValue } from "firebase/database";
import { app } from "./config";

// Initialize Realtime Database
const db = getDatabase(app);

/**
 * Write data at a specified path
 * @param {string} path e.g. "users/userId"
 * @param {Object} data JSON data to write
 */
export async function setData(path, data) {
  return set(ref(db, path), data);
}

/**
 * Read data once at a specified path
 * @param {string} path
 * @returns {Promise<Object>} data
 */
export async function getData(path) {
  const snapshot = await get(ref(db, path));
  return snapshot.exists() ? snapshot.val() : null;
}

/**
 * Update data at a specified path
 * @param {string} path
 * @param {Object} updates
 */
export async function updateData(path, updates) {
  return update(ref(db, path), updates);
}

/**
 * Delete data at a specified path
 * @param {string} path
 */
export async function deleteData(path) {
  return remove(ref(db, path));
}

/**
 * Listen to real-time updates at a path
 * @param {string} path
 * @param {Function} callback
 * @returns {Function} unsubscribe listener
 */
export function listenData(path, callback) {
  const dataRef = ref(db, path);
  const unsubscribe = onValue(dataRef, (snapshot) => {
    callback(snapshot.exists() ? snapshot.val() : null);
  });

  return () => unsubscribe();
}
