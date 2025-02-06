import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe_PudJS8_0H5nzc9wjQx0ZzejEhn_3GI",
  authDomain: "olx-clone-dc429.firebaseapp.com",
  projectId: "olx-clone-dc429",
  storageBucket: "olx-clone-dc429.firebasestorage.app",
  messagingSenderId: "1002832915601",
  appId: "1:1002832915601:web:c6b28ec614446f2e8fe330",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    console.log("User signed up successfully!");
  } catch (error) {
    console.error("Signup Error:", error);
    alert(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully!");
  } catch (error) {
    console.error("Login Error:", error);
    alert(error.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully!");
  } catch (error) {
    console.error("Logout Error:", error);
    alert(error.message);
  }
};

export { auth, db, googleProvider, signup, login, logout, signOut };