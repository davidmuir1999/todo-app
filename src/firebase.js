import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1i_QjM7VbtQt-g2jt9PqX0wotnSPIGM4",
  authDomain: "todo-app-522ae.firebaseapp.com",
  projectId: "todo-app-522ae",
  storageBucket: "todo-app-522ae.appspot.com",
  messagingSenderId: "692206850074",
  appId: "1:692206850074:web:2a9626214a5b02dfcec1a3"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);