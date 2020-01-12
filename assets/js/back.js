$(document).ready(function(){
    $(".send").hide();

    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBl2clt1PCGfVmWsACNiAUwTrVgIu9DacA",
    authDomain: "joma-bot.firebaseapp.com",
    databaseURL: "https://joma-bot.firebaseio.com",
    projectId: "joma-bot",
    storageBucket: "joma-bot.appspot.com",
    messagingSenderId: "657224913614",
    appId: "1:657224913614:web:97b8a36d18fd8f19f0769f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  // Push data to firebase on request sent
  $("#sendme").submit(function(e){
      e.preventDefault();
      $(".send").show();

      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();

      // Some mechanism to check for valid data and prevent abuse
      // Define mechanism here

      // Add sender info to the collection
      db.collection("contact").add({
          name: name,
          email: email,
          message: message
      })
      .then(function(docRef){
          console.log("Document written to database.");
          $(".send").hide();
          alert("Sent!");
      })
      .catch(function(error){
          console.error("Error adding document.", error);
          $(".send").hide();
          alert("Can't send, there seems to be a problem.");
      });
  });
});
