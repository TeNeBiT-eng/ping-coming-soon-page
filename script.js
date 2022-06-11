// function validation(e) {
//   e.preventDefault();
//   // var form = document.querySelector("#form");
//   var email = document.querySelector("#email").value;
//   var text = document.querySelector("#text");
//   let pattern = /\S+@\S\.\S+/;

//   if (email.length != 0) {
//     if (email.test(pattern)) {
//       text.innerHTML = "Email address is valid";
//       text.style.color = "#00ff00";
//     } else {
//       text.innerHTML = "Please provide a valid email address";
//       text.style.color = "#ff0000";
//       text.style.display = "block";
//     }
//   } else {
//     text.innerHTML = "Email address is empty";
//     text.style.color = "#f0000f";
//     text.style.fontSize = ".7rem";
//     text.style.fontStyle = "italic";
//     //   text.style.display = "block";
//     email.style.border = "1px solid red";
//   }
// }
let form = document.getElementById("myForm");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;
let email = document.getElementById('email');

const Validation = (e) => {
  e.preventDefault();
  if (email.value === "") {
    text.innerHTML = "Email address is empty";
    text.style.color = "#f0000f";
    text.style.fontSize = ".7rem";
    text.style.fontStyle = "italic";
    text.style.display = "block";
    email.style.border = "1px solid red";
  } else if (email.value.match(pattern)) {
    success.innerHTML = "";
    text.innerHTML = "Email address is valid";
    text.style.color = "green";
    text.style.display = "block";
    email.style.border = "1px solid hsl(223, 100%, 88%)";
  } else {
    success.innerHTML = "Please provide a valid email address";
    success.style.color = "red";
    success.style.fontStyle = "italic";
    success.style.fontSize = ".7rem";
    text.innerHTML = "";
    text.style.color = "#00ff00";
    text.style.display = "none";
  }
};

form.addEventListener("submit", Validation);
