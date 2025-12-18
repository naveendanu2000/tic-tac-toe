import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import WinnerOverlay from "./components/WinnerOverlay";
import Moves from "./components/Moves";
import PlayingGrid from "./components/PlayingGrid";
import { type Chance } from "./types/Chance";

function App() {
  const baseGrid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [grid, setGrid] = useState(baseGrid);

  const [chance, setChance] = useState<Chance>("X");

  const [check, setCheck] = useState("");

  const [move, setMove] = useState(1);
  const [logs, setLogs] = useState<Record<number, string>>({});

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handlePlayer1 = (name: string) => {
    setPlayer1(name);
  };
  const handlePlayer2 = (name: string) => {
    setPlayer2(name);
  };

  const baseEditing = {
    player1: true,
    player2: true,
  };
  const [isEditing, setIsEditing] =
    useState<Record<string, boolean>>(baseEditing);

  const handleReset = () => {
    setGrid(baseGrid);
    setCheck("");
    setChance("X");
    setPlayer1("");
    setPlayer2("");
    setIsEditing(baseEditing);
    setMove(1);
    setLogs({});
  };

  return (
    <>
      <div className="mb-5 mt-10">
        <h1>Tik - Tac - Toe</h1>
      </div>
      <section className="relative">
        <div>
          <Player
            handleName={handlePlayer1}
            setIsEditing={setIsEditing}
            playerId="player1"
            player={player1}
            isEditing={!!isEditing["player1"]}
          />
          <Player
            handleName={handlePlayer2}
            setIsEditing={setIsEditing}
            playerId="player2"
            player={player2}
            isEditing={!!isEditing["player2"]}
          />
        </div>
        {/* Playing Grid */}
        <PlayingGrid
          isEditing={isEditing}
          grid={grid}
          check={check}
          chance={chance}
          move={move}
          player1={player1}
          player2={player2}
          setGrid={setGrid}
          setCheck={setCheck}
          setChance={setChance}
          setLogs={setLogs}
          setMove={setMove}
        />
        {/* Winner Overlay */}
        <WinnerOverlay
          check={check}
          player1={player1}
          player2={player2}
          handleReset={handleReset}
        />
      </section>
      <section className="mt-5 ">
        {/* Moves */}
        <Moves logs={logs} />
      </section>
    </>
  );
}

export default App;
