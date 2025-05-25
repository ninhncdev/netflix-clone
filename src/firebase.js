import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCkUin-c4SmlZH9mW1fBNlJjLTL_AUYtUA",
  authDomain: "netflix-clone-9dd06.firebaseapp.com",
  projectId: "netflix-clone-9dd06",
  storageBucket: "netflix-clone-9dd06.firebasestorage.app",
  messagingSenderId: "226732701716",
  appId: "1:226732701716:web:970949dba291bfebdb0f01",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};
export { auth, login, logout, db, signup };
