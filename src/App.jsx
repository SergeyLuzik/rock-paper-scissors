import { Greeting } from "./components/Greeting";
import { SwitchThemeButton } from "./components/SwitchThemeButton";
import { Game } from "./components/Game";

export const App = () => {
  return (
    <div>
      <SwitchThemeButton />
      <Greeting />
      <Game />
    </div>
  );
};
