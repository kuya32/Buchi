'use strict';

const express = require('express');
const app = express();
const jsdom = require('jsdom');
const { beforeEach } = require('mocha')
let frontend;
const options = {
  contentType: "text/html",
};

beforeEach(function() {
  return jsdom.fromFile('/Users/MAcod/Projects/Buchi/index.html', options).then((dom) => {
    frontend = dom.window.document.querySelector(".reveal-content").addEventListener("submit", submitForm);
  });
});

app.get("/", function(req, res) {
  res.send("You are live!");
});

// dom.window.document.querySelector(".reveal-content").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault()

  let name = document.querySelector(".form-control#name").value;
  let email = document.querySelector(".form-control#email").value;
  let subject = document.querySelector(".form-control#subject").value;
  let message = document.querySelector(".form-control#message").value;

  document.querySelector(".reveal-content").reset();

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