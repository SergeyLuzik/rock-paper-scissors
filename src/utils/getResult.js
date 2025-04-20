export const getResult = (winner) => {
  switch (winner) {
    case null:
      return 'draw !';
    case 'player':
      return 'you won ! 🎉';
    case 'computer':
      return `${winner} won ! 🎉`;
    default:
      return '';
  }
};
