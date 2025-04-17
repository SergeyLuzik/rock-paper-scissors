import { Button } from './Button';

export const Greeting = () => (
  <div className="flex items-center gap-8">
    <Button text="play" size="large" />
    <h1 className="text-3xl leading-[1.215] text-secondary">
      Rock Paper Scissors <br />
      The game
    </h1>
  </div>
);
