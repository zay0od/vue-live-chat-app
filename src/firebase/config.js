import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCHPtG6gQkq1kxGvpXx1WsZ40FDTBY5uJU",
    authDomain: "vue-first-project-aa31a.firebaseapp.com",
    projectId: "vue-first-project-aa31a",
    storageBucket: "vue-first-project-aa31a.appspot.com",
    messagingSenderId: "882720148186",
    appId: "1:882720148186:web:8abbd01448e0bb538633e3"
  };


  // init firebase
  firebase.initializeApp(firebaseConfig)


  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  
  export{ projectAuth, projectFirestore, timestamp }