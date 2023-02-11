//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Firebase Back-End Script ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvOcwqUsV4wmSZhddnuwaoxYuR--y-FQU",
  authDomain: "purpledo-6c22b.firebaseapp.com",
  databaseURL: "https://purpledo-6c22b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "purpledo-6c22b",
  storageBucket: "purpledo-6c22b.appspot.com",
  messagingSenderId: "1034881143619",
  appId: "1:1034881143619:web:7e3d6cb38b59acc74d15f6",
  measurementId: "G-3FHXN6VL5L"
};

document.addEventListener("DOMContentLoaded", event => {

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();


// Google Login On-Click
document.getElementById("google-login").onclick = () => signInWithPopup(auth, provider)
  .then((result) => {
    console.log("Sign In Success");
    const user = result.user;
    const firstName = user.displayName.split(" ")[0];

    // Update Dom
    document.getElementById("greeting-name").innerHTML = `<i>${firstName}</i>`;
  })
});
