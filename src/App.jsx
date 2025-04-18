import { Greeting } from './components/Greeting';
import { SwitchThemeButton } from './components/SwitchThemeButton';
import { Game } from './components/Game';
import { useDispatch, useSelector } from 'react-redux';
import { switchMode } from './actions/mode';

export const App = () => {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const handlePlayClick = () => {
    dispatch(switchMode());
  };
  return (
    <div className="relative flex h-full flex-col items-center justify-center">
      <SwitchThemeButton />
      {mode === 'greeting' ? <Greeting onPlayClick={handlePlayClick} /> : <Game />}
    </div>
  );
};
