const firebaseConfig = {
    apiKey: "AIzaSyDmy1iG9N7zp3EkTkY9aJuflh9bhVyMU6g",
    authDomain: "mindfulvista-13323.firebaseapp.com",
    projectId: "mindfulvista-13323",
    storageBucket: "mindfulvista-13323.appspot.com",
    messagingSenderId: "634915839395",
    appId: "1:634915839395:web:0ebea737ab4b2f507e0e16",
    measurementId: "G-Z8E6HXB4LE",
    databaseURL: "https://mindfulvista-13323-default-rtdb.firebaseio.com/" // Replace with your actual URL
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var nameentered = document.getElementById("nameInput").value;
// Initialize Firestore
const firestore = firebase.firestore();
const auth = firebase.auth();
const database = firebase.database();
const loginForm = document.getElementById("loginForm");
// const loginForm=document.getElementsByClassName("loginForm");
const container = document.getElementsByClassName("container");
const main = document.getElementsByClassName("main");
const navigationbar = document.getElementsByClassName("navigationbar");
let signinuser = (evt) => {
    evt.preventDefault();

    const email = document.getElementById("emailid").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            alert("Login successful!");
            // Redirect to the home page
            mainfunction();
           ;
        })
        .catch((error) => {
            alert(error.message);
            console.error(error.code);
            console.error(error.message);
        });
};

function getUserInformation(uid) {
  const userRef = database.ref("users/" + uid);

  userRef.once("value")
    .then((snapshot) => {
      const userData = snapshot.val();

      if (userData) {
        const name = userData.name;
        const age = userData.age;

        // Now you can use 'name' and 'age' as needed
        console.log("Name:", name);
        console.log("Age:", age);
      } else {
        console.log("User data not found");
      }
    })
    .catch((error) => {
      console.error("Error getting user information:", error);
    });
}

loginForm.addEventListener("submit", signinuser);

function mainfunction() {
  document.querySelector("form#loginForm").style.display = "none";
  document.querySelector(".container").style.display = "none";
  document.querySelector(".main").style.display = "block";
  document.querySelector(".navigationbar").style.display="block";
  
}

var detailsbtn=document.querySelector(".details");
function details(){
  detailsbtn.addEventListener("click",()=>{
    console.log(nameentered);
  })
}
details();