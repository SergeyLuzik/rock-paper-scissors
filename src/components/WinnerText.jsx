import { useSelector } from 'react-redux';
import { getResult } from '../utils';
export const WinnerText = () => {
  const winner = useSelector((state) => state.winner);
  return winner !== '' ? (
    <p className="text-md text-accent-second uppercase sm:text-4xl">{getResult(winner)}</p>
  ) : null;
};
