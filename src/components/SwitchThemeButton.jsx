import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../actions/theme';
// import lightModeIcon from '../assets/light-mode.svg';
// import darkModeIcon from '../assets/dark-mode.svg';

export const SwitchThemeButton = () => {
  const theme = useSelector((state) => state.theme);
  const themeIcon =
    theme === 'light' ? 'after:bg-[image:var(--light-icon)]' : 'after:bg-[image:var(--dark-icon)]';
  const dispatch = useDispatch();
  const handleThemeSwitch = () => {
    dispatch(switchTheme());
    document.documentElement.classList.toggle('dark');
  };
  return (
    <button
      className={`absolute top-0 right-0 size-24 cursor-pointer after:block after:size-24 ${themeIcon}`}
      type="button"
      onClick={handleThemeSwitch}></button>
  );
};
