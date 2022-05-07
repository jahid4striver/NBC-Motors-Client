// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiWU9XbeDSY27HTVSENMuucZw7hC345cE",
  authDomain: "nbc-motors-inventory.firebaseapp.com",
  projectId: "nbc-motors-inventory",
  storageBucket: "nbc-motors-inventory.appspot.com",
  messagingSenderId: "832260037360",
  appId: "1:832260037360:web:b9885b6496c06593ef8035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

export default auth;