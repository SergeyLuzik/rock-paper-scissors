import { Choices } from './Choices';
import { Choose } from './Choose';
import { ResetScoreButton } from './ResetScoreButton';
import { Score } from './Score';
import { WinnerText } from './WinnerText';

export const Game = () => {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <h1 className="text-2xl text-secondary">Rock Paper Scissors</h1>
      <ResetScoreButton />
      <Score />
      <WinnerText />
      <Choices />
      <Choose />
    </div>
  );
};
