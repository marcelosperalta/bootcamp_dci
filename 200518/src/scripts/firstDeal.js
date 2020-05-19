const firstDeal = () => {
  dealerHand.splice(0, dealerHand.length);
  playerHand.splice(0, playerHand.length);
  playerHand.push(newDeck.shift(0));
  dealerHand.push(newDeck.shift(0));
  playerHand.push(newDeck.shift(0));
  dealerHand.push(newDeck.shift(0));
};
