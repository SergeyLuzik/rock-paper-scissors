export const PLAYER_SCORE_INCREASE = 'PLAYER_SCORE_INCREASE';
export const COMPUTER_SCORE_INCREASE = 'COMPUTER_SCORE_INCREASE';
export const RESET_SCORE = 'RESET_SCORE';

export const playerScoreIncrease = () => ({ type: PLAYER_SCORE_INCREASE });
export const computerScoreIncrease = () => ({ type: COMPUTER_SCORE_INCREASE });
export const resetScore = () => ({ type: RESET_SCORE });
