import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB47p-K1HU_PkJ9T6br94yg1O0aONVQmM8",
    authDomain: "feez-ka-dojo.firebaseapp.com",
    projectId: "feez-ka-dojo",
    storageBucket: "feez-ka-dojo.appspot.com",
    messagingSenderId: "642708931396",
    appId: "1:642708931396:web:7aedce72a5a6a75c050d11",
    measurementId: "G-RMGNXDPM1S"
  };


 const app =initializeApp(firebaseConfig);
export const db = getFirestore(app)