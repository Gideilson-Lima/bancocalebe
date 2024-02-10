function send(){  
    var id = document.getElementById("id").value;
    var idChurch = document.getElementById("idChurch").value;
    window.location.href = "user.html?param1="+id+"&param2="+idChurch;
  }

document.getElementById("bt").addEventListener("click", send, false);