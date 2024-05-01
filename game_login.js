function login(){
    var user1=document.getElementById("usuario1").value;
    var user2=document.getElementById("usuario2").value;
    localStorage.setItem("name1", user1);
    localStorage.setItem("name2", user2);
    window.location.replace("gamePage.html")
}