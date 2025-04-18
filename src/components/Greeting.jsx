import { Button } from './Button';

export const Greeting = ({ onPlayClick }) => (
  <div className="flex items-center gap-8">
    <Button text="play" size="large" onClick={onPlayClick} />
    <h1 className="text-base text-secondary md:text-2xl xl:text-3xl">
      Rock Paper Scissors <br />
      The game
    </h1>
  </div>
);
