import { Buttom } from './Button';

export const Greeting = () => (
  <div className="flex items-center gap-8">
    <Buttom text="play" />
    <h1 className="text-[37px] leading-[1.215] text-secondary">
      Rock Paper Scissors <br />
      The game
    </h1>
  </div>
);
