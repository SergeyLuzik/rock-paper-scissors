import { Button } from './Button';

export const Game = () => (
  <div className="flex flex-col gap-8 text-center">
    <h1 className="text-3xl text-secondary">Rock Paper Scissors</h1>
    <button className="text-[20px] text-primary" type="button">
      {'Reset the score'.toUpperCase()}
    </button>
    <div className="flex justify-between">
      <div className="flex text-[14px] text-primary">
        <p>{'player score:'.toUpperCase()}</p>
        <output>0</output>
      </div>
      <div className="flex text-[14px] text-primary">
        <p>{'computer score:'.toUpperCase()}</p>
        <output>0</output>
      </div>
    </div>
    <p className="text-[40px] text-accent-second">YOU WON ! 🎉</p>
    <span className="text-[20px] text-primary">VS</span>
    <div>
      <p className="mb-6 text-[14px] font-medium text-third">
        Choose your move, rock paper or scissors?
      </p>
      <div className="flex gap-12">
        <Button text="rock" />
        <Button text="paprer" />
        <Button text="scissors" />
      </div>
    </div>
  </div>
);
