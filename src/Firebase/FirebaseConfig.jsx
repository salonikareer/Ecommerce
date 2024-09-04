 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsg6VhMLDS8ToNYqcO5q1ZlZyJitBzDLM",
  authDomain: "e-com-a763e.firebaseapp.com",
  projectId: "e-com-a763e",
  storageBucket: "e-com-a763e.appspot.com",
  messagingSenderId: "338552676575",
  appId: "1:338552676575:web:b529b842d678c6f0e5896a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth }; 