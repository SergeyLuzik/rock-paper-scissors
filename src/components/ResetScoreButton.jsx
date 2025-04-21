import { useDispatch } from 'react-redux';
import { resetScore } from '../actions/score';
import { resetWinner } from '../actions/winner';
import { resetChoices } from '../actions/choices';

export const ResetScoreButton = () => {
  const dispatch = useDispatch();
  const handleResetScore = () => {
    dispatch(resetScore());
    dispatch(resetWinner());
    dispatch(resetChoices());
  };
  return (
    <button
      onClick={handleResetScore}
      className="cursor-pointer text-base text-primary uppercase"
      type="button">
      Reset the score
    </button>
  );
};
