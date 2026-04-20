import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getDatabase, ref, push, set, get } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDlbT_ebLAuKeMZ5KLESE6Dn2fxMx3vtaQ",
  authDomain: "mobile-programming-f5543.firebaseapp.com",
  projectId: "mobile-programming-f5543",
  storageBucket: "mobile-programming-f5543.firebasestorage.app",
  messagingSenderId: "1050752095653",
  appId: "1:1050752095653:web:f620f89c4bf4a35c19c44c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Firebase Connected");


// SAVE DATA
window.saveInfo = function () {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(!fname || !lname || !phone || !email || !message){
        alert("Please fill all fields");
        return;
    }

    const contactRef = ref(db, "contacts");
    const newContactRef = push(contactRef);

    set(newContactRef, {
        firstName: fname,
        lastName: lname,
        phone: phone,
        email: email,
        message: message
    })
    .then(() => {
        console.log("Message Saved Successfully");
        alert("Submitted Successfully");
    })
    .catch((error) => {
        console.log(error);
    });
};


// READ DATA
window.readInfo = function () {

    get(ref(db, "contacts"))
    .then((snapshot) => {

        console.log("===== CONTACT DATA =====");

        snapshot.forEach((childSnapshot) => {
            console.log(childSnapshot.key);
            console.log(childSnapshot.val());
        });

    })
    .catch((error) => {
        console.log(error);
    });
};