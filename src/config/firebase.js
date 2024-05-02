import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKapZypw1n3nq1bzdkk3o5lssABBpPSW4",
  authDomain: "utilitydownloader.firebaseapp.com",
  projectId: "utilitydownloader",
  storageBucket: "utilitydownloader.appspot.com",
  messagingSenderId: "942628808088",
  appId: "1:942628808088:web:3b36aefeeb8bbb2d4777ed",
  measurementId: "G-HM5WPT3WJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };