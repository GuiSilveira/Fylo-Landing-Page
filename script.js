"use strict";

// Elements
const form = document.querySelector("form");
const input = document.querySelector("input");
const error = document.querySelector(".error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = input.value.trim();

  if (!isValid(emailValue)) {
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
  }
});

function isValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
