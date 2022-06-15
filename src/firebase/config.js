import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqNdp_eOEtUtlXgGr63Lr-rg3SO5fHwL0",
  authDomain: "e-commerce-78b62.firebaseapp.com",
  projectId: "e-commerce-78b62",
  storageBucket: "e-commerce-78b62.appspot.com",
  messagingSenderId: "146954015740",
  appId: "1:146954015740:web:aa0dda8353a57d19d19879"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}