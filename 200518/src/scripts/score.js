const checkForAce = () => {
  if (playerScore > 21) {
    for (let i = 0; i < playerHand.length; i++) {
      if (playerHand[i].value == "A") {
        playerHand[i].value = 1;
        playerScore -= 10;
        scoreUpdate();
        break;
      }
    }
  }
  if (dealerScore > 21) {
    for (let i = 0; i < dealerHand.length; i++) {
      if (dealerHand[i].value == "A") {
        dealerHand[i].value = 1;
        dealerScore -= 10;
        scoreUpdate();
        break;
      }
    }
  }
};

const scoreUpdate = () => {
  let dh = [];
  let ph = [];
  dealerHand.forEach(function (el) {
    if (el.value == "A") {
      dh.push(11);
    } else if (el.value == "K" || el.value == "Q" || el.value == "J") {
      dh.push(10);
    } else {
      dh.push(parseInt(el.value));
    }
  });
  playerHand.forEach(function (el) {
    if (el.value == "A") {
      ph.push(11);
    } else if (el.value == "K" || el.value == "Q" || el.value == "J") {
      ph.push(10);
    } else {
      ph.push(parseInt(el.value));
    }
  });
  dealerScore = dh.reduce((a, b) => a + b, 0);
  playerScore = ph.reduce((a, b) => a + b, 0);
  checkForAce();
  resultArea.innerHTML = `<h2>You have ${playerScore}...</h2>`;
};
