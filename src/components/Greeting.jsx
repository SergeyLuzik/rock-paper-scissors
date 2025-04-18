import { Button } from './Button';

export const Greeting = ({ onPlayClick }) => (
  <div className="flex items-center gap-8">
    <Button text="play" size="large" onClick={onPlayClick} />
    <h1 className="text-3xl text-secondary">
      Rock Paper Scissors <br />
      The game
    </h1>
  </div>
);
