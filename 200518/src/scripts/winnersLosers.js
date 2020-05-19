const youWin = () => {
  wins++;
  resultArea.innerHTML = `<h2>You Win! Dealer has: ${dealerScore}.</h2>`;
  winsLosses();
};

const youLose = (string) => {
  losses++;
  resultArea.innerHTML = `<h2>Dealer has ${dealerScore}. ${string}`;
  winsLosses();
};

const youTie = () => {
  resultArea.innerHTML = `<h2>It's a draw!</h2>`;
};
