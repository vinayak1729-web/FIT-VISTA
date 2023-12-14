
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

// Initialize Firestore
const firestore = firebase.firestore();
const auth = firebase.auth();
const database = firebase.database();
// reference your database
var contactFormDB = firebase.database().ref("contactForm");
// const auth = getAuth(app);
document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();

  const name = getElementVal("name");
  const age = getElementVal("age");
  const emailid = getElementVal("emailid");
  const password = getElementVal("password");

  // Create a new user with email and password
  auth.createUserWithEmailAndPassword(emailid, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User created:", user.uid);
      console.log(user)
      createUsercollection(user);
      // Save user information to the database
      saveMessages(name, age, emailid, password);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorMessage);
    });

  // Display alert, reset form, etc.
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  document.getElementById("contactForm").reset();
}


const saveMessages = (uid,name,age, emailid,password) => {
  // var newContactForm = contactFormDB.push();
  var newContactForm = contactFormDB.child(uid);

  newContactForm.set({
    name: name,
    age:age,
    emailid: emailid,
    password:password
  
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

function createUsercollection(user) {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const password = document.getElementById("password").value;

  // Add a new document to the users collection
  firestore.collection('users').add({
    name: name.displayname,
    email: user.email,
    age: age,
    password: password,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}


