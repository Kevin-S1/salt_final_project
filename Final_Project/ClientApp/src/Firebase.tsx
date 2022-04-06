import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA7Tx8S2zVbZHEDgVUX-NkkTckHPsyaE2w",
    authDomain: "borrowmy.firebaseapp.com",
    projectId: "borrowmy",
    storageBucket: "borrowmy.appspot.com",
    messagingSenderId: "136388627786",
    appId: "1:136388627786:web:9f3d6e23e2c51ddb55c5b3"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();