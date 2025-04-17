export const Button = ({ text, fontSize = 'text-[25px]', width = 'w-42.5', height = 'h-15' }) => (
  <button
    className={`flex items-center justify-center rounded-md bg-accent text-white hover:bg-accent-second ${fontSize} ${width} ${height}`}
    type="button">
    {text.toUpperCase()}
  </button>
);
