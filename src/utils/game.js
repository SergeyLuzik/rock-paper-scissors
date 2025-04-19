export const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoiceIndex = Math.floor(Math.random() * choices.length);
  return choices[randomChoiceIndex];
};

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

export const getResult = (winner) => {
  switch (winner) {
    case null:
      return 'draw !';
    case 'player':
      return 'you won ! 🎉';
    case 'computer':
      return `${winner} won ! 🎉`;
    default:
      return '';
  }
};
