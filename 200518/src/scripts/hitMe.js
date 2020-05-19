const hit = () => {
  let newCard = newDeck[0];
  let { suit, value } = newCard;
  playerHand.push(newDeck.shift(0));
  let cardDiv = `
  <div class="card ${suit}">
  <span class=cardValueTop>${value}</span>
  <span class="${suit}Shape"></span>
  <span class=cardValueBottom>${value}</span>
  </div>`;
  playerCards.innerHTML += cardDiv;
  scoreUpdate();
  checkBust();
};
