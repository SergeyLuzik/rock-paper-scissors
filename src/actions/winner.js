export const SET_WINNER = 'SET_WINNER';
export const RESET_WINNER = 'RESET_WINNER';

export const setWinner = (winner) => ({ type: SET_WINNER, payload: winner });
export const resetWinner = () => ({ type: RESET_WINNER });
