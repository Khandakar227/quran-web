import { firebase } from "@firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCb6MQHyHOUZWAXqExI4LHZgf907C126fc",
    authDomain: "quran-web-d872a.firebaseapp.com",
    databaseURL: "https://quran-web-d872a-default-rtdb.firebaseio.com/",
    projectId: "quran-web-d872a",
    storageBucket: "quran-web-d872a.appspot.com",
    messagingSenderId: "459341308041",
    appId: "1:459341308041:web:92011674a8b1f61e3c2658",
    measurementId: "G-L2V3F92ZBQ"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;