import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
export const firebaseConfig = {
    apiKey: "AIzaSyB7cBuTqMTXUtE-vQzE33ioXuEW7dFtaYo",
    authDomain: "porfolio-2022-ac620.firebaseapp.com",
    projectId: "porfolio-2022-ac620",
    storageBucket: "porfolio-2022-ac620.appspot.com",
    messagingSenderId: "511307942162",
    appId: "1:511307942162:web:716baf020246d803e30bcb",
    measurementId: "G-RM1HTMHKZ8",
    //storageBucket: 'gs://porfolio-2022-ac620.appspot.com/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);