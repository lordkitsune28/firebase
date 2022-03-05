// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwKLE-IMVdcU1zshq8Cm8Hls8d2ArUK4E",
    authDomain: "inserte-nombre.firebaseapp.com",
    projectId: "inserte-nombre",
    storageBucket: "inserte-nombre.appspot.com",
    messagingSenderId: "675157040922",
    appId: "1:675157040922:web:efd07921fdf35636e6d6a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore()


export {
    app,
    google,
    db

}
