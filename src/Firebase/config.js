import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyCrY8wF0axng_Dmz_z_fwVBM0pmuf7a9AM",
  authDomain: "react-with-firebase-e567d.firebaseapp.com",
  projectId: "react-with-firebase-e567d",
  storageBucket: "react-with-firebase-e567d.appspot.com",
  messagingSenderId: "1006649014250",
  appId: "1:1006649014250:web:790456909c45faadcb2493",
  measurementId: "G-7QDDLVML53"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleprovider = new GoogleAuthProvider();

