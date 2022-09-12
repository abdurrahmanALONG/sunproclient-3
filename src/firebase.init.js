// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA9KMLclBGlTacWKSQt1M_agdvSxi7XS0",
  authDomain: "sunpro-3.firebaseapp.com",
  projectId: "sunpro-3",
  storageBucket: "sunpro-3.appspot.com",
  messagingSenderId: "723526015598",
  appId: "1:723526015598:web:b9127398f5685eacf6247f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;