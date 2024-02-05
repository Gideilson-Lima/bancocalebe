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

function send(){  
  var id = document.getElementById("id").value;
  var idChurch = document.getElementById("idChurch").value;
  window.location.href = "user.html?param1="+id+"&param2="+idChurch;
}

function getInfo(){
    const params = new URLSearchParams(window.location.search);
    var id = params.get("param1");
    var idChurch = params.get("param2");
    // Example: Read data from Firebase
    const usersRef = ref(database, idChurch+'/'+id);
    get(usersRef).then((snapshot) => {
        const user = snapshot.val();
        var panel = document.getElementById("mpanel");
        if(!Object.hasOwn(user,"name"))
          panel.innerHTML = `<ul><li>Conta: ${user.id}</li><li>Cliente: [usuário não cadastrado]</li><li>Saldo: C$ ${user.balance}</li></ul>`;
        else
          panel.innerHTML = `<ul><li>Conta: ${user.id}</li><li>Cliente: ${user.name}</li><li>Saldo: C$ ${user.balance}</li></ul>`;
    });
}

var bt = document.getElementById("bt");
// if this button is null, it means we are not in "index.html", but in "user.html"
if(bt != null )
  document.getElementById("bt").addEventListener("click", send, false);
else
  getInfo();
