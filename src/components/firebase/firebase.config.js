// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOWiNVIi3u3UvduCnVMj2vbWLF6i_ezkw",
  authDomain: "brand-shop-client-hiren.firebaseapp.com",
  projectId: "brand-shop-client-hiren",
  storageBucket: "brand-shop-client-hiren.appspot.com",
  messagingSenderId: "1013675231992",
  appId: "1:1013675231992:web:a02155b4391ededf39c90d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;