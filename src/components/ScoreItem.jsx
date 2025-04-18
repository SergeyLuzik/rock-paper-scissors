export const ScoreItem = ({ title, score }) => (
  <div className="flex text-sm text-primary">
    <p>{`${title}:`}</p>
    <output className="my-auto ml-2 align-middle">{score}</output>
  </div>
);
