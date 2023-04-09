import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAmD5SckA72i87rKsZ3rvxJNZDHfpnwSrw",
  authDomain: "pydora-97c7e.firebaseapp.com",
  projectId: "pydora-97c7e",
  storageBucket: "pydora-97c7e.appspot.com",
  messagingSenderId: "577020478127",
  appId: "1:577020478127:web:a8232145b4d523733f0a5a",
  measurementId: "G-F2HT0TZG52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);