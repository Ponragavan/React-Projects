import { useState } from "react";

const Player = ({ name, symbol,isActive,onChangeName }) => {
  const [playerName,setPlayerName] = useState(name)
  const [isEditting, setIsEdiitting] = useState(false);
  const editHandler = () => {
    setIsEdiitting((prev) => !prev);
    if(isEditting){
      onChangeName(symbol,playerName);
    }
  };
  const nameHandler = (event) => {
    setPlayerName(event.target.value)
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditting ? (
          <input type="text" required value={playerName} onChange={nameHandler} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
