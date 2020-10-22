import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyC5TcV5g6Snlg9mTowyIY9eugbh_-6iBhs",
  authDomain: "dostuff-ea458.firebaseapp.com",
  databaseURL: "https://dostuff-ea458.firebaseio.com",
  projectId: "dostuff-ea458",
  storageBucket: "dostuff-ea458.appspot.com",
  messagingSenderId: "270602846736",
  appId: "1:270602846736:web:7a8628b8ac1e2b66054095"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }