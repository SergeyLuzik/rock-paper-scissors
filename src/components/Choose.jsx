import { Button } from './Button';

export const Choose = ({ onChoiceClick }) => (
  <div>
    <p className="mb-6 text-sm font-medium text-third">Choose your move, rock paper or scissors?</p>
    <div className="flex gap-12">
      <Button
        text="rock"
        onClick={() => {
          onChoiceClick('rock');
        }}
      />
      <Button
        text="paper"
        onClick={() => {
          onChoiceClick('paper');
        }}
      />
      <Button
        text="scissors"
        onClick={() => {
          onChoiceClick('scissors');
        }}
      />
    </div>
  </div>
);
