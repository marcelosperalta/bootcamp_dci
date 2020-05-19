const stand = () => {
  scoreUpdate();
  dealersTurn();
  hitButt.classList.add("hide");
  standButt.classList.add("hide");
  newButt.classList.remove("hide");
};

const dealersTurn = () => {
  dealerCards.innerHTML = "<h2>Dealer</h2>";
  dealerHand.forEach(function (el) {
    let cardDiv;
    let { suit, value } = el;
    if (el.value == "1") {
      cardDiv = `<div class="card ${suit}">
    <span class=cardValueTop>A</span>
    <span class="${suit}Shape"></span>
    <span class=cardValueBottom>A</span>
    </div>`;
    } else {
      cardDiv = `<div class="card ${suit}">
    <span class=cardValueTop>${value}</span>
    <span class="${suit}Shape"></span>
    <span class=cardValueBottom>${value}</span>
    </div>`;
    }
    dealerCards.innerHTML += cardDiv;
  });
  while (dealerScore < 17) {
    let newCard = newDeck[0];
    let { suit, value } = newCard;
    dealerHand.push(newDeck.shift(0));
    let cardDiv = `
    <div class="card ${suit}">
    <span class=cardValueTop>${value}</span>
    <span class="${suit}Shape"></span>
    <span class=cardValueBottom>${value}</span>
    </div>`;
    dealerCards.innerHTML += cardDiv;
    scoreUpdate();
  }
  if (dealerScore < playerScore || dealerScore > 21) {
    youWin();
  } else if (dealerScore == playerScore) {
    youTie();
  } else {
    youLose("You lose!");
  }
};
