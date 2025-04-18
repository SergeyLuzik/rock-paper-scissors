import { useDispatch } from 'react-redux';
import { resetScore } from '../actions/score';

export const ResetScoreButton = () => {
  const dispatch = useDispatch();
  const handleResetScore = () => {
    dispatch(resetScore());
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
