import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD-3dn00QZZQdNjGVdXVEeBMbKYNeFaPPA",
    authDomain: "unichat-ff5af.firebaseapp.com",
    projectId: "unichat-ff5af",
    storageBucket: "unichat-ff5af.appspot.com",
    messagingSenderId: "1023320477157",
    appId: "1:1023320477157:web:4ac5ad1f72ee398ee4f30c"
  }).auth();

export default auth