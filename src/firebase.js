import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/firestore';


const app = firebase.initializeApp({
  apiKey: "AIzaSyCxctfhqqO_Oc1ICaX33CtC3oJ-YjEZYn0",
  authDomain: "juicecord-tmp.firebaseapp.com",
  databaseURL: "https://juicecord-tmp-default-rtdb.firebaseio.com",
  projectId: "juicecord-tmp",
  storageBucket: "juicecord-tmp.appspot.com",
  messagingSenderId: "680588833437",
  appId: "1:680588833437:web:5d4348a191ff870cbada74",
  measurementId: "G-G0EVCR9T82"
})

export const auth = app.auth()
export default app