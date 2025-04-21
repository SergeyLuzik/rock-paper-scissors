import RockIcon from '../assets/rock.svg?react';
import PaperIcon from '../assets/paper.svg?react';
import ScissorsIcon from '../assets/scissors.svg?react';
import { useSelector } from 'react-redux';

const ICONS = {
  rock: <RockIcon />,
  paper: <PaperIcon />,
  scissors: <ScissorsIcon />
};

export const Choices = () => {
  const playerChoice = useSelector((state) => state.choices.player);
  const computerChoice = useSelector((state) => state.choices.computer);
  return playerChoice ? (
    <div className="flex items-center gap-5 text-primary sm:gap-18">
      <div className="size-25">{playerChoice && ICONS[playerChoice]}</div>
      <span className="text-base uppercase">vs</span>
      <div className="size-25 -scale-x-100">{computerChoice && ICONS[computerChoice]}</div>
    </div>
  ) : null;
};
