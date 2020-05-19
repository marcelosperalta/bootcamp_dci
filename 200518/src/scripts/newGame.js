const winsLosses = () => {
  playerWins.innerHTML = `Won: ${wins}`;
  playerLosses.innerHTML = `Lost: ${losses}`;
};

const newGame = () => {
  newButt.classList.add("hide");
  tableCards.classList.add("hide");
  hitButt.classList.remove("hide");
  standButt.classList.remove("hide");
  buildNewDeck();
  shuffleDeck(newDeck);
  resultArea.innerHTML = "";
  winsLosses();
  firstDeal();
  dealerCards.innerHTML = "<h2>Dealer</h2>";
  playerCards.innerHTML = "<h2>Player</h2>";
  let dealerFaceUp = dealerHand[1];
  const dealerCardsDeal = () => {
    let { suit, value } = dealerFaceUp;
    let cardDiv = `
    <div class="card-back">
    <span class="cardBackShape"></span>
    </div>
    <div class="card ${suit}">
    <span class=cardValueTop>${value}</span>
    <span class="${suit}Shape"></span>
    <span class=cardValueBottom>${value}</span>
    </div>`;
    dealerCards.innerHTML += cardDiv;
  };
  dealerCardsDeal();
  playerHand.forEach(function (el) {
    let { suit, value } = el;
    let cardDiv = `<div class="card ${suit}"><span class=cardValueTop>${value}</span><span class="${suit}Shape"></span><span class=cardValueBottom>${value}</span></div>`;
    playerCards.innerHTML += cardDiv;
  });
  scoreUpdate();
  if (playerScore == 21 && dealerScore !== 21) {
    hitButt.classList.add("hide");
    standButt.classList.add("hide");
    newButt.classList.remove("hide");
    youWin();
  } else if (playerScore == 21 && dealerScore == 21) {
    hitButt.classList.add("hide");
    standButt.classList.add("hide");
    newButt.classList.remove("hide");
    youTie();
  }
};
