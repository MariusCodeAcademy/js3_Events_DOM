"use strict"; // here we go again

// event target

document.body.addEventListener("click", documentClickHandle);

function documentClickHandle(event) {
  // event target yra tas elmentas ant kurio ivyko ivykis
  console.log(event);

  // istrinti tik jei el yra li
  if (event.target.tagName === "LI") {
    event.target.style.border = "2px solid tomato";
  }
}

// documentClickHandle();

const articleEl = document.querySelector("article");

articleEl.addEventListener("click", function (event) {
  if (event.target.tagName !== "ARTICLE") {
    event.target.style.backgroundColor = "gray";
  }
});

// sukurit nauja el, prideti klase texta ir ideti ji i dom

function makeMeHtmlEl(tag, text, className = "", parentEl = document.body) {
  const newEl = document.createElement(tag);
  newEl.className = className;
  newEl.textContent = text;
  parentEl.appendChild(newEl);
}

const divEl = document.getElementById("cia");
makeMeHtmlEl("h3", "Dynamic From Function", "some-class", divEl);

makeMeHtmlEl("p", "Other El", "text", divEl);
