import {initializeApp} from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDGQYJHyAnFNgcqgYKpyRU-ApvlZIw9hZc",
  authDomain: "app-7deb1.firebaseapp.com",
  projectId: "app-7deb1",
  storageBucket: "app-7deb1.firebasestorage.app",
  messagingSenderId: "1031924835038",
  appId: "1:1031924835038:web:348a8693e56f0ccd45984f",
  databaseURL: "https://app-7deb1-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
