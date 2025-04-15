import { Buttom } from "./Button";

export const Game = () => (
  <div>
    <h1>Rock Paper Scissors</h1>
    <button type="button">{"Reset the score".toUpperCase()}</button>
    <div>
      <div>
        <p>{"player score:".toUpperCase()}</p>
        <output>0</output>
      </div>
      <div>
        <p>{"computer score:".toUpperCase()}</p>
        <output>0</output>
      </div>
    </div>
    <p>YOU WON ! 🎉</p>
    <span>VS</span>
    <p>Choose your move, rock paper or scissors?</p>
    <div>
      <Buttom text={"rock".toUpperCase()} />
      <Buttom text={"paprer".toUpperCase()} />
      <Buttom text={"scissors".toUpperCase()} />
    </div>
  </div>
);
