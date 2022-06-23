
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAsA9bRis-2yRPLPIS0W00BG0yDxGmvTIg",
      authDomain: "c-94-b9e94.firebaseapp.com",
      databaseURL: "https://c-94-b9e94-default-rtdb.firebaseio.com",
      projectId: "c-94-b9e94",
      storageBucket: "c-94-b9e94.appspot.com",
      messagingSenderId: "207210567267",
      appId: "1:207210567267:web:2b985add142839e34d0a56",
      measurementId: "G-5CDWNKJYQ6"
    };
    
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("Username")
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!"

    function add_room(){
          room_name = document.getElementById("room_name").value
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room"
          })
          localStorage.setItem("room_name", room_name)
          window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot){
 document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      row = "<div class'room_name' id=" + Room_names + " onclick ='redirectToRoomName(this.id)'>"+Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
       console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"; 
      }

function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location = "index.html"
}