export const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoiceIndex = Math.floor(Math.random() * choices.length);
  return choices[randomChoiceIndex];
};
