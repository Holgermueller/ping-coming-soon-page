"use strict";

const checkEmail = (event) => {
  event.preventDefault();

  let emailValue = document.getElementById("email").value;
  let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let result = reg.test(emailValue);

  if (result == false) {
    document.getElementById("messages").innerHTML =
      "Please provide a valid email address";
    document.getElementById("messages").style.marginTop = "2%";
    document.getElementById("messages").style.display = "block";
    document.getElementById("messages").style.color = "red";
    document.getElementById("email").style.borderColor = "red";
  } else {
    document.getElementById("messages").innerHTML = "Thank you!";
    document.getElementById("messages").style.display = "block";
    document.getElementById("messages").style.color = "green";
  }
};
