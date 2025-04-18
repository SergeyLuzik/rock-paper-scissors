const SIZES = {
  base: 'w-42.5 h-15 text-lg',
  large: 'w-42.5 h-22.5 text-3xl'
};
export const Button = ({ text, size = 'base', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center rounded-xl bg-accent text-white uppercase hover:bg-accent-second ${SIZES[size]}`}
      type="button">
      {text}
    </button>
  );
};
