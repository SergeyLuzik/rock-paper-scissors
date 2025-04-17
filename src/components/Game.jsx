import { Button } from './Button';

export const Game = () => (
  <div className="flex flex-col gap-8 text-center">
    <h1 className="text-2xl text-secondary">Rock Paper Scissors</h1>
    <button className="text-base text-primary" type="button">
      {'Reset the score'.toUpperCase()}
    </button>
    <div className="flex justify-between">
      <div className="flex text-sm text-primary">
        <p>{'player score:'.toUpperCase()}</p>
        <output>0</output>
      </div>
      <div className="flex text-sm text-primary">
        <p>{'computer score:'.toUpperCase()}</p>
        <output>0</output>
      </div>
    </div>
    <p className="text-4xl text-accent-second">YOU WON ! 🎉</p>
    <span className="text-base text-primary">VS</span>
    <div>
      <p className="mb-6 text-sm font-medium text-third">
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
