// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

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
const database = getDatabase();

document.getElementById("bt").addEventListener("click", send, false);

function send(){
    var id = document.getElementById("id").value;
    // Example: Read data from Firebase
    const usersRef = ref(database, 'nSiao/'+id);
    get(usersRef).then((snapshot) => {
        const user = snapshot.val();
        document.getElementById("mpanel").textContent = user;
        console.log(user.nome);
    });
  }