import { Button } from './Button';

export const Greeting = () => (
  <div className="flex items-center gap-8">
    <Button text="play" fontSize="text-[27px]" height="h-22.5" />
    <h1 className="text-[37px] leading-[1.215] text-secondary">
      Rock Paper Scissors <br />
      The game
    </h1>
  </div>
);
