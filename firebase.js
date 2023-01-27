// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH9CW_O5WiMxg44zr1hn2VuzXylxn0o5o",
  authDomain: "rnregapp.firebaseapp.com",
  projectId: "rnregapp",
  storageBucket: "rnregapp.appspot.com",
  messagingSenderId: "448061672707",
  appId: "1:448061672707:web:abc5a5ebe0873be23d2d36"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}
const auth = firebase.auth()
export { auth };