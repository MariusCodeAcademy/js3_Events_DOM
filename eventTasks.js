"use strict"; // here we go again

//1 Susikurti nauja html faila

// susikurti mygtukus:

// 2. mygdukas kuris padaro body spalva juoda ir texta balta
const invertBtn = document.getElementById("invert");
invertBtn.addEventListener("click", function () {
  console.log("ivyko invert");

  document.body.style.backgroundColor = "black";
  document.body.style.color = "#fff";
});
// 3. [html] mygtukas po kuriuo sukuriam div. padarom diva 100px
// x 100px su apvadu
// [js]padadom kad paspaudus mygtuka pasikeistu div spalva i coral
const colorBtnEl = document.getElementById("colorBtn");
const colorDivEl = document.querySelector(".color-div");
let flag = true;
colorBtnEl.addEventListener("click", () => {
  if (flag === true) {
    colorDivEl.style.backgroundColor = "coral";
    flag = false;
  } else {
    colorDivEl.style.backgroundColor = "white";
    flag = true;
  }
});

// 4. po treciu mygtuku sugeneruoti rikiuota sarasa su texktu
// item_1, item_2, item_3
const outputKeturi = document.querySelector(".keturi");
const ulEl4 = outputKeturi.firstElementChild;
// sugeneruoti 3 itemus kai tik uzkraunam puslapi
// IIFE - iffe - imediately invoked function expresion
// automatiskai ivygdoma funkija
(function () {
  let str = "";
  [1, 2, 3].forEach((num) => {
    str += `<li>item_${num}</li>`;
  });
  ulEl4.innerHTML = str;
})();
// generate3();

// generuoti papildoma itema kai paspaudziam mygtuka
const addItemToListBtn = document.getElementById("addItemToList");
let counter = 4;
addItemToListBtn.addEventListener("click", function () {
  // sukurti nauja el nuo 4 ir didinti skaiciu ir toliau kurti el
  const newLi = document.createElement("li");

  newLi.textContent = "item_" + counter++;
  ulEl4.appendChild(newLi);
});
// 5 [html] sukurti nav, [js] kurioje butu 3-5 nuorodos
// sukurti mygtuka nuorodu desineje ir kad paspaudus mygtuka
// nuorodos pasisleptu ir liktu tik burger mygtukas kuri paspaudus
// matytit nuorodas
// nusitaikom i navigacija
const mainNavEl = document.querySelector(".main-nav");
// nusitaikom i mygtuka navigacijos vidue
const navToggleBtn = mainNavEl.lastElementChild;

navToggleBtn.addEventListener("click", function () {
  mainNavEl.classList.toggle("hide");
});

// 6 [html] sukurti ivesties lauka htmle, salia mygtuka
// 6.1 padaryti kad ivedant teksta i lauka tekstas atsivaizduotu mygtuke
// nusitaiko i diva sesi
const sestasDiv = document.getElementById("sestas");
// sesto viduje taikomes i el su query selector
const ivestiesLaukas = sestasDiv.querySelector("input");
const mygtukas = sestasDiv.querySelector("button");
const h1El = document.querySelector("h1");
ivestiesLaukas.addEventListener("input", function () {
  // paimti reiksme is ivestes lauko ir atvaizduoti ja mygtko tekstu
  mygtukas.innerText = ivestiesLaukas.value;
  // 6.2 padaryti kad yvendant tekstas atsivaizduotu H1 elemente documento virsuje
  h1El.textContent = ivestiesLaukas.value;

  // 6.3 padaryti kad ivedus spalva angliskai i ivesties lauka dokumento body
  // taptu tokios spalvos
  // paimti kas ivesta i input field ir nustatysi body baground
  // color tokios spalvos
  document.body.style.backgroundColor = ivestiesLaukas.value;
});

// 6.4 padaryti kad paspaudus mygtuka ivestas tekstas butu atvaizduotas
// is priesingos puses
mygtukas.addEventListener("click", function () {
  // 1. gauti teksto reikme
  let ivestasTekstas = ivestiesLaukas.value;
  console.log("Pasaudei, ivyks invert ", ivestasTekstas);

  // 2. apversti ja is priesingos puses
  let masyvasIsTexto = ivestasTekstas.split("");
  console.log("masyvasIsTexto", masyvasIsTexto);

  let priesingaPuseMasyvas = masyvasIsTexto.reverse();
  console.log("priesingaPuseMasyvas", priesingaPuseMasyvas);

  let textasIsMasyvo = priesingaPuseMasyvas.join("");
  console.log("textasIsMasyvo", textasIsMasyvo);

  // one line method chaining
  textasIsMasyvo = ivestiesLaukas.value.split("").reverse().join("");

  // 3. grazinti i vesties lauka
  ivestiesLaukas.value = textasIsMasyvo;
});

// 7. prideti 4tu punktu sukurtam sarasui eventlistenerius kad paspaudus
// ta el jam
// uzsidetu klase .active . aprasyti klase kad el isiskirtu vizualiai is kitu
console.log(ulEl4.tagName === "UL");
ulEl4.addEventListener("click", function (event) {
  const elementasAntKurioPaspaudziau = event.target;
  console.log(elementasAntKurioPaspaudziau.tagName);
  if (elementasAntKurioPaspaudziau.tagName === "LI") {
    elementasAntKurioPaspaudziau.classList.toggle("active");
  }
});

// 8 [html] sukurti html dar viena mygtuka su ivesties lauku ir divu 100px aukscio
// ivesti i lauka keturias spalvas angliskai atskirtas tarpu
// paspaudus mygtuka turetu keistis divo fono spalva is eiles pagal ivestas
// spalvas.

// Psiausdo kodas
const astuoniEL = document.querySelector(".astuoni");
const spalvosInput = astuoniEL.firstElementChild;
const spalvosBtn = astuoniEL.lastElementChild;
const spalvuPaleteNudazumui = astuoniEL.nextElementSibling;
// 1. gaunam teksta
let countSpalvos = 0;
spalvosBtn.addEventListener("click", function () {
  console.log(spalvosInput.value);
  // 2 pasiverciam teksta i masyva
  const spalvuMasyvas = spalvosInput.value.trim().split(" ");
  let visoSplavuYra = spalvuMasyvas.length;
  console.log(spalvuMasyvas);
  // nudazyti

  spalvuPaleteNudazumui.style.backgroundColor = spalvuMasyvas[countSpalvos++];
  if (countSpalvos === visoSplavuYra) {
    countSpalvos = 0;
  }
});

// 3 paspaudimo metu imtam visk kita spalva is masyvo kol baigias

// 4. ir tiek

/// 9 dinamiskai js sugeneruoti modala ir atvaizduoti ji paspausus htmle sukurta
// mygtuka. Modale yra antraste paragrafas ir mygtukas
const modalBtn = document.getElementById("modal");
let modalBackDrop;
drawModal();
createBackDrop();
hideBackDrop();
let modalEl = document.querySelector(".modal");
console.log(modalEl);
modalBtn.addEventListener("click", function () {
  console.log("Paspaudem Modal Mygtuka");

  toggleModal();
  showBackdrop();
});

function toggleModal() {
  modalEl.classList.toggle("open");
}

function drawModal() {
  console.log("I am drawing modal");
  let strHtml = `
  <div class="modal">
      <h3>Modal very important</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta autem fugiat laudantium
        explicabo sapiente blanditiis quae laboriosam debitis dolores maxime?
      </p>
      <button>Destroy modal</button>
    </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", strHtml);
}

function createBackDrop() {
  modalBackDrop = document.createElement("div");
  modalBackDrop.className = "back-drop";
  document.body.insertAdjacentElement("afterbegin", modalBackDrop);
}
function hideBackDrop() {
  modalBackDrop.style.display = "none";
}
function showBackdrop() {
  modalBackDrop.style.display = "block";
}
modalBackDrop.addEventListener("click", function () {
  console.log("Paspaudziau backdrop");

  hideBackDrop();
  modalEl.classList.remove("open");
});

// 9.1 Modale turetu buti mygtukas close, kuri pasalina sukurta modala is DOM
// nustaikykti i modal destroy mygtuka
const destroyBtn = modalEl.querySelector("button");
// sureaguoti i jo paspaudima
destroyBtn.addEventListener("click", function () {
  console.log("destroy");
  // aptikus paspaudima pasaliti modal el is dom
  modalEl.remove();
  hideBackDrop();
});

// 9.2 sukurti siek tiek permatoma juoda fona kuris atsiranda kai atsiranda
// modalas ir kuris dengia viska isskyrus modal.
// paspaudus juoda fona uzsidaro modal

// 10 accordion
// kai uzsikrauna psl atidarytas buna viena el pats pirmas
// spaudizant ant antrastes accordiono paragrafo tekstas pasidaro matomas
// graziai issciplecia is virsaus i apacia (vertikaliai)
// extra pakeisti rodykle kad rodytu i desine kai matosi tekstas

// 10.1 kai paspaudziam ant accordiono title
// gaunu console log
// togglinam tam el klase 'open'
//
const accordionContainer = document.querySelector(".accordion");

const h4Elementai = accordionContainer.querySelectorAll("h4");

console.log(h4Elementai);

h4Elementai.forEach((h4) => {
  h4.addEventListener("click", function () {
    console.log("pataikei ant h4");
    h4.parentElement.classList.toggle("open");
    if (h4.parentElement.classList.contains("open")) {
      h4.nextElementSibling.style.maxHeight = h4.nextElementSibling.scrollHeight + "px";
    } else {
      h4.nextElementSibling.style.maxHeight = 0;
    }
  });
});
