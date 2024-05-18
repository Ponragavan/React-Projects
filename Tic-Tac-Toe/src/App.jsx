import logo from "./assets/game-logo.png";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players,setPlayers] = useState({
    'X':'Player 1',
    'O':'Player 2'
  });
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialBoard.map(arr => [...arr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSysmbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSysmbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSysmbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSysmbol &&
      firstSquareSysmbol === secondSquareSysmbol &&
      firstSquareSysmbol === thirdSquareSysmbol
    ) {
      winner = players[firstSquareSysmbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  }

  const handleNameChange = (symbol,newName) => {
    setPlayers(prev => {
      return {
        ...prev,
        [symbol]:newName,
      };
    })
  }
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
              onChangeName={handleNameChange}
            />
            <Player
              name="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
              onChangeName={handleNameChange}
            />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} rematch={handleRematch}/>}
          <GameBoard onSelectingSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} name={players} />
      </main>
    </>
  );
}

export default App;
