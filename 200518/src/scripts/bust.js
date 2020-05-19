const checkBust = () => {
  if (playerScore > 21) {
    youLose("You busted! You Lose!");
    hitButt.classList.add("hide");
    standButt.classList.add("hide");
    newButt.classList.remove("hide");
    winsLosses();
  }
};
