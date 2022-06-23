function addUser(){
    username = document.getElementById("login_input").value
    localStorage.setItem("Username", username)

    window.location = "kwitter_room.html"
}