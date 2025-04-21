import { Button } from './Button';
import { useDispatch } from 'react-redux';
import { defineWinner, getComputerChoice } from '../utils';

import { setComputerChoice, setPlayerChoice } from '../actions/choices';
import { computerScoreIncrease, playerScoreIncrease } from '../actions/score';
import { setWinner } from '../actions/winner';

export const Choose = () => {
  const dispatch = useDispatch();
  const handlePlayerChoice = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const gameWinner = defineWinner(playerChoice, computerChoice);
    dispatch(setPlayerChoice(playerChoice));
    dispatch(setComputerChoice(computerChoice));
    dispatch(setWinner(gameWinner));

    if (gameWinner === 'player') {
      dispatch(playerScoreIncrease());
    }
    if (gameWinner === 'computer') {
      dispatch(computerScoreIncrease());
    }
  };
  return (
    <div>
      <p className="mb-6 text-sm font-medium text-third">
        Choose your move, rock paper or scissors?
      </p>
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <Button
          text="rock"
          onClick={() => {
            handlePlayerChoice('rock');
          }}
        />
        <Button
          text="paper"
          onClick={() => {
            handlePlayerChoice('paper');
          }}
        />
        <Button
          text="scissors"
          onClick={() => {
            handlePlayerChoice('scissors');
          }}
        />
      </div>
    </div>
  );
};
