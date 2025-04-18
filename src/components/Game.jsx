import { useDispatch, useSelector } from 'react-redux';
import { defineWinner, getComputerChoice, getResult } from '../services/game';

import { computerScoreIncrease, playerScoreIncrease } from '../actions/score';
import { setWinner } from '../actions/winner';
import { setComputerChoice, setPlayerChoice } from '../actions/choices';
import { Choices } from './Choices';
import { Choose } from './Choose';
import { Score } from './Score';
import { ResetScoreButton } from './ResetScoreButton';

export const Game = () => {
  const score = useSelector((state) => state.score);
  const choices = useSelector((state) => state.choices);
  const dispatch = useDispatch();

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

  const hasScore = score.player !== 0 || score.computer !== 0;

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <h1 className="text-2xl text-secondary">Rock Paper Scissors</h1>
      <ResetScoreButton />
      <Score score={score} />
      {hasScore && <p className="text-4xl text-accent-second uppercase">{getResult(winner)}</p>}
      {choices.player && hasScore && <Choices choices={choices} />}
      <Choose onChoiceClick={handlePlayerChoice} />
    </div>
  );
};
