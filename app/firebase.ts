import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB6rpSdZI2DxRISAUu2W4Oqu5WUNRK18E4",
    authDomain: "tinkoff-494c8.firebaseapp.com",
    projectId: "tinkoff-494c8",
    storageBucket: "tinkoff-494c8.appspot.com",
    messagingSenderId: "341544800355",
    appId: "1:341544800355:web:e887732a34922bc121a856",
    measurementId: "G-Z3VVCT5E66"
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();