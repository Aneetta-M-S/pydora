import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBj9YskpZVdmqG4KdeMk76-NL11o-VACsY",
  authDomain: "pydora-b7909.firebaseapp.com",
  projectId: "pydora-b7909",
  storageBucket: "pydora-b7909.appspot.com",
  messagingSenderId: "142422985375",
  appId: "1:142422985375:web:45086e888bf4403162f0aa",
  measurementId: "G-NNLNGF0S2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);