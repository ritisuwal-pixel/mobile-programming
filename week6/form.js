import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getDatabase, set, get, ref, update, remove, push  } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDlbT_ebLAuKeMZ5KLESE6Dn2fxMx3vtaQ",
    authDomain: "mobile-programming-f5543.firebaseapp.com",
    projectId: "mobile-programming-f5543",
    storageBucket: "mobile-programming-f5543.firebasestorage.app",
    messagingSenderId: "1050752095653",
    appId: "1:1050752095653:web:f620f89c4bf4a35c19c44c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)

console.log(db)

// CREATE
window.addUser = function () {
    let userId = document.getElementById("userId").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    set(ref(db, 'users/' + userId), {
        name: name,
        email: email
    })
    .then(() => {
        console.log("User Added Successfully with ID:", userId);
    })
    .catch((error) => {
        console.log(error);
    });
};


// READ
window.readUsers = function () {
    get(ref(db, 'users'))
    .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            console.log("ID:", childSnapshot.key);
            console.log(childSnapshot.val());
        });
    })
    .catch((error) => {
        console.log(error);
    });
};


// UPDATE
window.updateUser = function () {
    let userId = document.getElementById("userId").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    update(ref(db, 'users/' + userId), {
        name: name,
        email: email
    })
    .then(() => {
        console.log("User Updated Successfully");
    })
    .catch((error) => {
        console.log(error);
    });
};


// DELETE
window.deleteUser = function () {
    let userId = document.getElementById("userId").value;

    remove(ref(db, 'users/' + userId))
    .then(() => {
        console.log("User Deleted Successfully");
    })
    .catch((error) => {
        console.log(error);
    });
};