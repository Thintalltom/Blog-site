// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUG81TydaJDao1AexEXT7s6Iim3FHoF3U",
  authDomain: "blog-app-182f5.firebaseapp.com",
  projectId: "blog-app-182f5",
  storageBucket: "blog-app-182f5.appspot.com",
  messagingSenderId: "1082978912625",
  appId: "1:1082978912625:web:2648f55afbea2b2ba34ed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);
 const storage = getStorage(app);
 const auth = getAuth(app)
export { db, storage, auth };
export default app;