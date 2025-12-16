// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCESXlk2eqYsvUmA91o4NrXT9r-sX1txmM",
    authDomain: "axox-f626f.firebaseapp.com",
    projectId: "axox-f626f",
    storageBucket: "axox-f626f.firebasestorage.app",
    messagingSenderId: "764996840276",
    appId: "1:764996840276:web:96227925304e95bab176c1",
    measurementId: "G-1PF12ECQPK"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics only on client side and if supported
if (typeof window !== 'undefined') {
    isSupported().then(yes => yes && getAnalytics(app));
}
