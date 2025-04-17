export const Buttom = ({ text }) => (
  <button
    className="flex items-center justify-center rounded-md bg-accent text-white hover:bg-accent-second"
    type="button">
    {text.toUpperCase()}
  </button>
);
