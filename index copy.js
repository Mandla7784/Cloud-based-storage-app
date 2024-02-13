import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBgYaE8Sb0eWUP_ICOkL3Bs17rznvWyoXM",
    authDomain: "hero-e5356.firebaseapp.com",
    projectId: "hero-e5356",
    storageBucket: "hero-e5356.appspot.com",
    messagingSenderId: "546454017041",
    appId: "1:546454017041:web:8273bd92a67f7c33ac0db0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


//jquery
$("#login-user").click(function(){
var email = $("#exampleInputEmail1").val();
var password = $("#exampleInputPassword1").val();

console.log("New user" + email + "" + password)
signIn(email,password)
})


function signIn(email,password){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
let arrPlayer = [];

export function playGame(playerName,coins){
     
     let playerName = document.getElementById("").val;

     if(playGame){
        arrPlayer.push(playerName);
        for(let i = 0 ; i < arrPlayer.length; i++){
            let newLi = document.createElement('li');
            document.appendChild(newLi)


        }
     }

}

import {playGame} from "../index.js"