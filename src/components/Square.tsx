import { Player } from "../containers/Board";

interface ISquareProps {
  value: Player;
  winner: Player;
  onClick: () => void;
}

function Square({ value, winner, onClick }: ISquareProps) {
  //   console.log(value);

  if (!value) {
    return (
      <button className="square" disabled={Boolean(winner)} onClick={onClick} />
    );
  }

  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
      {value}
    </button>
  );
}

export default Square;

// automatically, if button already has value, not clickable, or does nothing when clicked.! cool
