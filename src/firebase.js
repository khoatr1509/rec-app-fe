// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqndVK31PFeCUdSvtA9CfTwwdsxIwT6Uc",
    authDomain: "rec-app-803db.firebaseapp.com",
    projectId: "rec-app-803db",
    storageBucket: "rec-app-803db.appspot.com",
    messagingSenderId: "842158778449",
    appId: "1:842158778449:web:19ee35b96606e229117070",
    measurementId: "G-TRWZBDGQKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage();

export { storage };

export default app;