import { useDispatch, useSelector } from 'react-redux';
import { defineWinner, getComputerChoice, getResult } from '../services/game';
import { Button } from './Button';
import { computerScoreIncrease, playerScoreIncrease, resetScore } from '../actions/score';
import { setWinner } from '../actions/winner';
import { setComputerChoice, setPlayerChoice } from '../actions/choices';

import RockIcon from '../assets/rock.svg?react';
import PaperIcon from '../assets/paper.svg?react';
import ScissorsIcon from '../assets/scissors.svg?react';

export const Game = () => {
  const score = useSelector((state) => state.score);
  const choices = useSelector((state) => state.choices);
  const dispatch = useDispatch();
  const handleResetScore = () => {
    dispatch(resetScore());
  };
  const winner = useSelector((state) => state.winner);
  const handlePlayerChoice = (playerChoice) => {
    dispatch(setPlayerChoice(playerChoice));
    const computerChoice = getComputerChoice();
    dispatch(setComputerChoice(computerChoice));
    dispatch(setWinner(defineWinner(playerChoice, computerChoice)));

    if (winner === 'player') {
      dispatch(playerScoreIncrease());
    } else {
      dispatch(computerScoreIncrease());
    }
  };

  const icons = {
    rock: <RockIcon />,
    paper: <PaperIcon />,
    scissors: <ScissorsIcon />
  };

  return (
    <div className="flex flex-col items-center gap-8 text-center">
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
      <p className="text-4xl text-accent-second uppercase">{getResult(winner)}</p>
      <div className="flex h-31.5 w-108.5 items-center justify-between text-primary">
        <div className="size-31.5">{choices.player && icons[choices.player]}</div>
        <span className="text-base uppercase">vs</span>
        <div className="size-31.5">{choices.computer && icons[choices.computer]}</div>
      </div>
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
