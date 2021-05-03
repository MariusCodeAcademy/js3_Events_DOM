"use strict"; // here we go again

const h1El = document.createElement("h1");

h1El.textContent = "Week12 day 1 Events";

document.body.prepend(h1El);

// Make bg dark
//1 gauti nuoroda i el pagal id
const makeDarkBtn = document.getElementById("makeDark");
// 2 uzdeti tam el klausikli arba ivykiu pasiklausyma, arba eventListener
// el.addEventListener(koksEventas,  KokiaFunkcijaVygdyti(be skliausteliu))
makeDarkBtn.addEventListener("mouseenter", makeBdDark);
makeDarkBtn.addEventListener("mouseleave", makeBdWhite);

function makeBdDark() {
  console.log("test ivyko");
  document.body.style.backgroundColor = "darkgrey";
}
function makeBdWhite() {
  document.body.style.backgroundColor = "white";
}

//<button>Ivert H1</button>
//1 nuoroda i myguta
const inverBtn = document.getElementById("inverBtn");
// 2 nuododa i el kuri keisimi h1El

// 3 dedam eventListener ant mygtuko
inverBtn.addEventListener("click", function () {
  console.log("Invert btn works");
  h1El.classList.toggle("invertTitle");
});

// Generate list
const generateListBtn = document.querySelector(".generateList");
const listArticleEL = document.querySelector(".listArticle");

generateListBtn.addEventListener("click", generateListStringWay);
const colorsArr = ["green", "blue", "yellow"];
function generateList() {
  const ulEl = document.createElement("ul");
  colorsArr.forEach((spava) => {
    // sukuriam li el
    const newLi = document.createElement("li");
    newLi.textContent = spava;
    // prideti eventLIstener
    newLi.addEventListener("click", invertLiHandler);
    // idedam li i ul
    ulEl.append(newLi);
  });
  // isvalom article pries irasant reiksmes
  listArticleEL.innerHTML = "";
  listArticleEL.appendChild(ulEl);
}

function generateListStringWay() {
  // neturim galimybes uzdeti event listeneri el sukurimo vietoje
  let rezultString = `
    <ul>
        ${colorsArr.map((c) => "<li>" + c + "</li>").join("")}
    </ul>
    `;
  listArticleEL.innerHTML = rezultString;
  makeLiActive();
}

// uzdeti event listenerius naujai sukurtiem li el
// nusitaikyti i el su querySelectorALl ir gaunam node list
// kuram galim atlikti foreach
function makeLiActive() {
  const naujiLiEl = document.querySelectorAll(".listArticle li");
  console.log("naujiLiEl", naujiLiEl);
  naujiLiEl.forEach((color) => {
    color.addEventListener("click", invertLiHandler);
  });
}

// uzdeti event listenerius sugeneruotiems el
// paspaudus li el ta el uzdeti jam klase inverted
function invertLiHandler(event) {
  console.log(event.target);
  //   console.log(this);
  // event.target - rodo i el kuris isvkiete funkcija
  this.classList.toggle("invertTitle");
}

// paimti ivesties lauko teksta ir atvaizduoti juos zemiau esanciame div
const inputField = document.getElementById("input");
const outputDiv = inputField.nextElementSibling;

// ivesties lauko eventas yra input, keydown, keyUp ir kt
inputField.addEventListener("input", addTextToOutput);

inputField.addEventListener("keyup", function (event) {
  //   console.log("ar veikia");

  //   console.log(event.key);
  if (event.key === "Enter") {
    // alert("paspaudei enter");
    addTextToOutput(null, "clear");
  }
});

function addTextToOutput(event, toClear = null) {
  //   console.log(event);
  // gaunam ivesties reiksme
  let ivesta = inputField.value;
  //   console.log(inputField.value);
  //   console.log(event.target.value);
  //   console.log(this.value);
  outputDiv.innerHTML = `<p>${ivesta.toUpperCase()}</p>`;
  // pravalyti lauka jei paspaudem enter
  if (toClear) inputField.value = "";
}
