'use strict';

const express = require('express');
const app = express();

app.get("/", function(req, res) {
  res.send("You are live!")
});

window.document.querySelector(".reveal-content").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault()

  let name = window.document.querySelector(".form-control#name").value;
  let email = window.document.querySelector(".form-control#email").value;
  let subject = window.document.querySelector(".form-control#subject").value;
  let message = window.document.querySelector(".form-control#message").value;

  window.document.querySelector(".reveal-content").reset();

  sendEmail(name, email, subject, message)
}

function sendEmail(name, email, subject, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "kuya3232@gmail.com",
    Password: "hvktsljnuijxsfpg",
    To: "kuya3232@gmail.com",
    From: email,
    Subject: `New email message from ${name}`,
    Body: `Email: ${email}<br/> Subject: ${subject}<br/> Message: ${message}`,

  }).then((message) => alert("Email successfully sent!"))
}

app.listen(process.env.PORT || 5000);