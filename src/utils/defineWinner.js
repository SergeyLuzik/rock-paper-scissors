export const defineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return null;
  }

  const playerWinConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  return playerWinConditions[playerChoice] === computerChoice ? 'player' : 'computer';
};
