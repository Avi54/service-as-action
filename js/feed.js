// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDqHlB7IXgcpeP2TEwARlhk5rOaSkUS6oY",
    authDomain: "sa-feedback-form.firebaseapp.com",
    databaseURL: "https://sa-feedback-form.firebaseio.com",
    projectId: "sa-feedback-form",
    storageBucket: "sa-feedback-form.appspot.com",
    messagingSenderId: "310543127109",
    appId: "1:310543127109:web:aa4ecff420c1725acc492c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    // Refernece contactInfo collections
    let contactInfo = firebase.database().ref("feedback");
    
    // Listen for a submit
    document.querySelector(".contact-form").addEventListener("submit", submitForm);
    
    function submitForm(e) {
      e.preventDefault();
    
      //   Get input Values
      let name = document.querySelector(".name").value;
      let email = document.querySelector(".email").value;
      let message = document.querySelector(".message").value;
      console.log(name, email, message);
    
      saveContactInfo(name, email, message);
    
      document.querySelector(".contact-form").reset();
    }
    
    // Save infos to Firebase
    function saveContactInfo(name, email, message) {
      let newContactInfo = contactInfo.push();
    
      newContactInfo.set({
        name: name,
        email: email,
        message: message,
      });

    }