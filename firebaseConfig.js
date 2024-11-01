import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuaCTKQHGxj9RXApHqrDU9k4SFCjevYMw",
  authDomain: "appsenac-dbbf8.firebaseapp.com",
  projectId: "appsenac-dbbf8",
  storageBucket: "appsenac-dbbf8.firebasestorage.app",
  messagingSenderId: "411927032328",
  appId: "1:411927032328:web:b768576ee1d9f933ca57bd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export { db };
export default app;
