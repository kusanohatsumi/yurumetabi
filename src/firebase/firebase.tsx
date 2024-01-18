import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrk01UlBFwJ0cAVprODay6BLY2p0NSE0A",
  authDomain: "yurumetabi-2fe91.firebaseapp.com",
  projectId: "yurumetabi-2fe91",
  storageBucket: "yurumetabi-2fe91.appspot.com",
  messagingSenderId: "1069942845228",
  appId: "1:1069942845228:web:72b4adb99f116607ee0689",
  measurementId: "G-XRFK3KXT3M",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
