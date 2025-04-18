export const SET_PLAYER_CHOICE = 'SET_PLAYER_CHOICE';
export const SET_COMPUTER_CHOICE = 'SET_COMPUTER_CHOICE';

export const setPlayerChoice = (choice) => ({ type: SET_PLAYER_CHOICE, payload: choice });
export const setComputerChoice = (choice) => ({ type: SET_COMPUTER_CHOICE, payload: choice });
