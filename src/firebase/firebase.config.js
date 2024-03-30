// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH6KIqjXlEWFoFjOQYgkZGEDWIY8l0sRQ",
    authDomain: "food-order-management.firebaseapp.com",
    projectId: "food-order-management",
    storageBucket: "food-order-management.appspot.com",
    messagingSenderId: "974585942060",
    appId: "1:974585942060:web:04d7945291862e112b8189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth