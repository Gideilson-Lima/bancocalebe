// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { database } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZt2GcKUNAuOxPf1zGXbU330wlKWMDMoI",
  authDomain: "teste1-52f37.firebaseapp.com",
  databaseURL: "https://teste1-52f37.firebaseio.com",
  projectId: "teste1-52f37",
  storageBucket: "teste1-52f37.appspot.com",
  messagingSenderId: "830217582096",
  appId: "1:830217582096:web:96d9bcfb7c6a7e99a7bc95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const databaseRef = database();

window.send = function(){
    var id = document.getElementById("id").value;
    // Example: Read data from Firebase
    const usersRef = databaseRef.ref('nSiao/'+id);
    usersRef.once('value', (snapshot) => {
        const user = snapshot.val();
        document.getElementById("panel").innerHTML = user;
        console.log(user.nome);
    });
}
