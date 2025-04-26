import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1ggtIa6EnlpV9qXe0C91-VXe44xd5UMc",
  authDomain: "projecttyuiuvite.firebaseapp.com",
  projectId: "projecttyuiuvite",
  storageBucket: "projecttyuiuvite.appspot.com",
  messagingSenderId: "491252491239",
  appId: "1:491252491239:web:0e75b624676228c6b0d342",
  measurementId: "G-2VTS9BFZ2E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };