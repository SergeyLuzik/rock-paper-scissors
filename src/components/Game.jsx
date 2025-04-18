import { useDispatch, useSelector } from 'react-redux';
import { defineWinner, getComputerChoice, getResult } from '../services/game';
import { Button } from './Button';
import { computerScoreIncrease, playerScoreIncrease } from '../actions/score';
import { setWinner } from '../actions/winner';

export const Game = () => {
  const score = useSelector((state) => state.score);
  const dispatch = useDispatch();
  const handleResetScore = () => {};
  const winner = useSelector((state) => state.winner);
  const handlePlayerChoice = (playerChoice) => {
    const computerChoice = getComputerChoice();
    dispatch(setWinner(defineWinner(playerChoice, computerChoice)));

    if (winner === 'player') {
      dispatch(playerScoreIncrease());
    } else {
      dispatch(computerScoreIncrease());
    }
  };

  return (
    <div className="flex flex-col gap-8 text-center">
      <h1 className="text-2xl text-secondary">Rock Paper Scissors</h1>
      <button
        onClick={handleResetScore}
        className="cursor-pointer text-base text-primary uppercase"
        type="button">
        Reset the score
      </button>
      <div className="flex justify-between uppercase">
        <div className="flex text-sm text-primary">
          <p>player score:</p>
          <output>{score.player}</output>
        </div>
        <div className="flex text-sm text-primary">
          <p>computer score:</p>
          <output>{score.computer}</output>
        </div>
      </div>
      {console.log(winner)}
      <p className="text-4xl text-accent-second uppercase">{getResult(winner)}</p>
      <span className="text-base text-primary">VS</span>
      <div>
        <p className="mb-6 text-sm font-medium text-third">
          Choose your move, rock paper or scissors?
        </p>
        <div className="flex gap-12">
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
    </div>
  );
};
