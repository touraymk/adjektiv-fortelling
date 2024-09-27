/*Lag en liten historie med noen manglende ord. 
Lag en liste over ord som kan klikkes på - og la disse 
ordene fylle tomrommene i historien når de blir valgt. 
Løs oppgaven ved å dele opp koden i MVC */
//Model
let adjectivs = [
  "gigantisk",
  "snørrete",
  "slu",
  "vakker",
  "søt",
  "støgg",
  "lekne",
  "late",
  "bråkete",
  "rare",
  "magisk",
  "forfengelige",
];
let selectedAdjectivs = [];
const maxAdjectivs = 6;

//View
updateView();

function updateView() {
  document.getElementById("app").innerHTML = /*html*/ `
    <p>
      Det var en gang en ${
        selectedAdjectivs[0] || "___"
      } katt som elsket å sitte og se på
      ${selectedAdjectivs[1] || "___"} enhjørninger på Discord. Når den ${
    selectedAdjectivs[2] || "___"
  } katten ikke så på ${selectedAdjectivs[3] || "___"}  enhjørninger på 
      Discord så elsker den ${selectedAdjectivs[4] || "___"} katten å ta en ${
    selectedAdjectivs[5] || "___"
  } lur.
    </p>
    <div class="grid">${createBtns()}</div>
    ${
      selectedAdjectivs.length === maxAdjectivs
        ? '<button onclick="resetStory()">Tilbakestill historien</button>'
        : ""
    }
  `;
}

function createBtns() {
  let buttons = "";

  for (let i = 0; i < adjectivs.length; i++) {
    const adjectiv = adjectivs[i];
    if (!selectedAdjectivs.includes(adjectiv)) {
      buttons += /*html*/ `<button onclick="selectAdjectiv('${adjectiv}')">
        ${adjectiv}
      </button>
    `;
    }
  }
  return buttons;
}

//Controller

function selectAdjectiv(adjectiv) {
  if (selectedAdjectivs.length < maxAdjectivs) {
    selectedAdjectivs.push(adjectiv);
    updateView();
  }
}

function resetStory() {
  selectedAdjectivs = [];
  updateView();
}
