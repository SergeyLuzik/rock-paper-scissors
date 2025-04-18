import RockIcon from '../assets/rock.svg?react';
import PaperIcon from '../assets/paper.svg?react';
import ScissorsIcon from '../assets/scissors.svg?react';

const icons = {
  rock: <RockIcon />,
  paper: <PaperIcon />,
  scissors: <ScissorsIcon />
};

export const Choices = ({ choices }) => (
  <div className="flex items-center gap-5 text-primary sm:gap-18">
    <div className="size-25">{choices.player && icons[choices.player]}</div>
    <span className="text-base uppercase">vs</span>
    <div className="size-25 -scale-x-100">{choices.computer && icons[choices.computer]}</div>
  </div>
);
