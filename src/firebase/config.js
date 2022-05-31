import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDf1OSo7AyN5VfXoMZ7RtRwo0r_L-nQYPo",
  authDomain: "ecommerce-98365.firebaseapp.com",
  projectId: "ecommerce-98365",
  storageBucket: "ecommerce-98365.appspot.com",
  messagingSenderId: "363815890916",
  appId: "1:363815890916:web:4d13ee7fd6e3578e3961f1"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}