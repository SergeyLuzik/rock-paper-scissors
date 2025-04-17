import { Greeting } from './components/Greeting';
import { SwitchThemeButton } from './components/SwitchThemeButton';
import { Game } from './components/Game';

export const App = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <SwitchThemeButton />
      <Greeting />
      <Game />
    </div>
  );
};
