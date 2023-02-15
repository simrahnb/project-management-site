import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBPfnDp_35xTKm_foCORT8_Z6drn64CN2Q",
  authDomain: "projectmanagementsite-8b9f6.firebaseapp.com",
  projectId: "projectmanagementsite-8b9f6",
  storageBucket: "projectmanagementsite-8b9f6.appspot.com",
  messagingSenderId: "549945452188",
  appId: "1:549945452188:web:0a03283bcc858ea893af59",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services : these objects will interact with the firestore database & auth
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
