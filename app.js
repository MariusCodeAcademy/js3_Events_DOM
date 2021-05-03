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
});
