// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYrALfW71f5sXUBwglLGhcyv8mXufdH6s",
  authDomain: "ecommerce-4d66f.firebaseapp.com",
  projectId: "ecommerce-4d66f",
  storageBucket: "ecommerce-4d66f.firebasestorage.app",
  messagingSenderId: "359786962053",
  appId: "1:359786962053:web:7c1c3ecd3241028796ddec",
  measurementId: "G-XKL4GT3HTN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const signinwithEmail =async(email,password)=>{
    await signInWithEmailAndPassword(auth,email,password)
    
}

export const signout =async()=>{
  await  signOut(auth)
  console.log("signout")

}