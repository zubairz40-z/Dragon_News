// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDOC6w-91PALySJmAdfBKng-AFQqBPJu0",
  authDomain: "z-dragon-news.firebaseapp.com",
  projectId: "z-dragon-news",
  storageBucket: "z-dragon-news.firebasestorage.app",
  messagingSenderId: "964952475277",
  appId: "1:964952475277:web:67866f61ba77b39a5ec4c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;