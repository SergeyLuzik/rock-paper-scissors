const SIZES = {
  base: 'h-10 xl:h-15 text-base xl:text-lg',
  large: 'h-15 xl:h-22.5 text-lg xl:text-3xl'
};
export const Button = ({ text, size = 'base', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-30 cursor-pointer items-center justify-center rounded-xl bg-accent text-white uppercase hover:bg-accent-second sm:w-42.5 ${SIZES[size]}`}
      type="button">
      {text}
    </button>
  );
};
