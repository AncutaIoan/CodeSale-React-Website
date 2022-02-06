import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCAU4yehlX6mYI8rwz98o6Ulktq6Vc7o_E",

  authDomain: "auth-development-69ddd.firebaseapp.com",

  projectId: "auth-development-69ddd",

  storageBucket: "auth-development-69ddd.appspot.com",

  messagingSenderId: "854432439425",

  appId: "1:854432439425:web:67d08a9479da75922d4180"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
