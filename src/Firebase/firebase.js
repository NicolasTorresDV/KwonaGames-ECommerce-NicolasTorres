// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlZ2k1u4cOQZQRlvnNOpxYyRJd5GaOYxQ",
  authDomain: "kwonagames-ecommerce.firebaseapp.com",
  projectId: "kwonagames-ecommerce",
  storageBucket: "kwonagames-ecommerce.appspot.com",
  messagingSenderId: "98887982737",
  appId: "1:98887982737:web:b5ddfa868477a8b5e16930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);