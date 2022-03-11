import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR78FgTOfc9brfmvCJjolEMmYaql_Tq-0",
    authDomain: "react-app-cursos-59ab8.firebaseapp.com",
    projectId: "react-app-cursos-59ab8",
    storageBucket: "react-app-cursos-59ab8.appspot.com",
    messagingSenderId: "259841789173",
    appId: "1:259841789173:web:a9aa9e170e2ccd1da189bc"
  };
 
  const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(); //IMPORTANTE ---> Nueva forma para el ejercicio
const googleProvider = new GoogleAuthProvider(); 
 
export{  
    firebaseApp,  
    googleProvider,
    db,
};  