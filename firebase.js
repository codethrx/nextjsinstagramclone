import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBaeGFqQxEAAj2IddsJIOzikLaw_UDfZAw",

  authDomain: "svcc-4a4b7.firebaseapp.com",

  projectId: "svcc-4a4b7",

  storageBucket: "svcc-4a4b7.appspot.com",

  messagingSenderId: "558816147013",

  appId: "1:558816147013:web:f4f7c2b9045f90605c952c",

  measurementId: "G-RBNPCWZW2R",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { db, storage };
