// import { initializeApp } from "firebase/app";
// import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import {getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDdUTkfnNv0_jej76mVuvPla0By0STNQIM",
//     authDomain: "tynkoff-copy.firebaseapp.com",
//     projectId: "tynkoff-copy",
//     storageBucket: "tynkoff-copy.appspot.com",
//     messagingSenderId: "461300034112",
//     appId: "1:461300034112:web:ec4cb838b96574dcd0cda5",
//     measurementId: "G-STFVSYHV33"
// };

// initializeApp(firebaseConfig);

// export const auth = getAuth();

// export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

// export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

// export const logout = () => signOut(auth);

// export const db = getFirestore();




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