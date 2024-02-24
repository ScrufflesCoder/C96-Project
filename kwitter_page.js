var firebaseConfig = {
    apiKey: "AIzaSyBK3PetaLMIq7mne3Ur0MhIf0NL-owyil8",
    authDomain: "kwitter-test-a4dfe.firebaseapp.com",
    databaseURL: "https://kwitter-test-a4dfe-default-rtdb.firebaseio.com",
    projectId: "kwitter-test-a4dfe",
    storageBucket: "kwitter-test-a4dfe.appspot.com",
    messagingSenderId: "111818505968",
    appId: "1:111818505968:web:6f62b28e18aeb3e50ecc35"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}