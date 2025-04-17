const SIZES = {
  base: 'w-42.5 h-15 text-lg',
  large: 'w-42.5 h-22.5 text-3xl'
};
export const Button = ({ text, size = 'base' }) => {
  return (
    <button
      className={`flex items-center justify-center rounded-md bg-accent text-white hover:bg-accent-second ${SIZES[size]}`}
      type="button">
      {text.toUpperCase()}
    </button>
  );
};
