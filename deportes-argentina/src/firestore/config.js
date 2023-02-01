import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDfqiGkeo8wRBZKqYLFFiLhD4W11_d9re8",
    authDomain: "deportes-argentina.firebaseapp.com",
    projectId: "deportes-argentina",
    storageBucket: "deportes-argentina.appspot.com",
    messagingSenderId: "324121965917",
    appId: "1:324121965917:web:12a37a4099ac46b91624b4"
  };


const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}