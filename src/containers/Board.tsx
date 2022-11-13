import { useEffect, useState } from "react";
import Square from "../components/Square";

export type Player = "X" | "O" | "TIE" | null;

function calculateWinner(squares: Player[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board() {
  // initializes array with length 9 and null values, starting board.
  const [squares, setSquares] = useState(Array(9).fill(null));

  // random first player, and tracks current player
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );

  // winner
  const [winner, setWinner] = useState<Player>(null);

  // what this does is basically, compare the squares array to a created squares array copy
  // if the index matches, changes the current value of that index to current player string which is X or O
  // if index does not match, just return it's value. either null if not yet clicked or X or O if already clicked prior
  // after this compare and populate, sets new array to state
  // and changes current player
  const setSquareValue = (i: number) => {
    const newData = squares.map((val, index) => {
      if (i === index) {
        return currentPlayer;
      }

      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  };

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }

    // !squares.filter((square) => !square).length
    // meaning filter the squares array and return falsy values (null)
    // then get the length. if it is falsy, 0 (zero)
    // means all squares are clicked
    if (!w && squares.filter((square) => square === null).length === 0) {
      setWinner("TIE");
    }
  }, [squares]);

  return (
    <div>
      {winner && winner !== "TIE" && <p>Congratulations {winner}</p>}
      {winner && winner === "TIE" && <p>Congratulations it's a tie!</p>}
      {!winner && <h2>Player {currentPlayer}'s turn</h2>}

      <div className="grid">
        {Array(9)
          .fill(null)
          .map((e, i) => (
            <Square
              key={i}
              onClick={() => setSquareValue(i)}
              value={squares[i]}
              winner={winner}
            />
          ))}
      </div>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Board;
