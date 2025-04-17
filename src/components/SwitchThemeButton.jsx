export const SwitchThemeButton = () => {
  const handleThemeSwitch = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <button
      className="absolute top-0 right-0 size-24 cursor-pointer bg-accent"
      type="button"
      onClick={handleThemeSwitch}></button>
  );
};
