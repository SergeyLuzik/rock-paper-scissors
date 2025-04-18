import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../actions/theme';
import LightModeIcon from '../assets/light-mode.svg?react';
import DarkModeIcon from '../assets/dark-mode.svg?react';

export const SwitchThemeButton = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleThemeSwitch = () => {
    dispatch(switchTheme());
    document.documentElement.classList.toggle('dark');
  };
  return (
    <button
      className={`absolute top-0 right-0 size-16 cursor-pointer lg:size-20 xl:size-24`}
      type="button"
      onClick={handleThemeSwitch}>
      {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};
