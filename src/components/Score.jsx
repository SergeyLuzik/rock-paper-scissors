import { ScoreItem } from './ScoreItem';

export const Score = ({ score }) => (
  <div className="flex justify-between gap-5 uppercase sm:gap-35.5">
    <ScoreItem title="player score" score={score.player} />
    <ScoreItem title="computer score" score={score.computer} />
  </div>
);
