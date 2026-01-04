import {createContext, use} from "react";
import {initializeApp} from "firebase/app";
import {getDatabase, ref, set} from "firebase/database";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGQYJHyAnFNgcqgYKpyRU-ApvlZIw9hZc",
  authDomain: "app-7deb1.firebaseapp.com",
  projectId: "app-7deb1",
  storageBucket: "app-7deb1.firebasestorage.app",
  messagingSenderId: "1031924835038",
  appId: "1:1031924835038:web:348a8693e56f0ccd45984f",
  databaseURL: "https://app-7deb1-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

const firebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
  const signupUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const putData = (key, data) => {
    set(ref(db, key), data);
  };
  return <firebaseContext.Provider value={{signupUser, putData}}>{props.children}</firebaseContext.Provider>;
};

export const useFirebase = () => use(firebaseContext);
