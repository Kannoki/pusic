import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYz8S3ZzYOoYh-wDm6_imyjzUm207ng1E",
  authDomain: "pusic-4094c.firebaseapp.com",
  databaseURL: "https://pusic-4094c-default-rtdb.firebaseio.com",
  projectId: "pusic-4094c",
  storageBucket: "pusic-4094c.appspot.com",
  messagingSenderId: "776743270994",
  appId: "1:776743270994:web:dd8260c7844ce663d57d8b",
  measurementId: "G-R281GJGYBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);