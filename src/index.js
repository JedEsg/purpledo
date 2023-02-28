//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Firebase Back-End Script ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";


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
const db = getFirestore(app);


// Google Login On-Click
document.getElementById("google-login").onclick = () => signInWithPopup(auth, provider);

auth.onAuthStateChanged(user => {
  if (user){
    console.log(user);
    const firstName = String(user.displayName.split(" ")[0]);
    const uId = user.uid;
    storeUserId(uId, user.displayName)

    // Update Dom
    document.getElementById("greeting-name").innerText = firstName;
    document.getElementById("login").classList.add("hide");
  }
})

async function storeUserId(uId, displayName){
  await setDoc(doc(db, "users", "userData", "userIds", uId), {
    userName : displayName
  
  });
}


});
