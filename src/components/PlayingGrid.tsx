import type { Dispatch, SetStateAction } from "react";
import { checkWinner } from "../services/checkWinner";
import type { Chance } from "../types/Chance";

const PlayingGrid = ({
  isEditing,
  grid,
  check,
  setGrid,
  setCheck,
  chance,
  setChance,
  setLogs,
  move,
  setMove,
  player1,
  player2,
}: {
  isEditing: Record<string,boolean>;
  grid: string[][];
  check: string;
  chance: string;
  move: number;
  player1: string;
  player2: string;
  setGrid: Dispatch<SetStateAction<string[][]>>;
  setCheck: Dispatch<SetStateAction<string>>;
  setChance: Dispatch<SetStateAction<Chance>>;
  setLogs: Dispatch<SetStateAction<Record<number, string>>>;
  setMove: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div
      className={`flex justify-center ${
        Object.keys(isEditing).length === 0 ? "" : "opacity-10"
      }`}
    >
      <ul>
        {grid.map((row, index) => (
          <li key={index}>
            <ul className="flex flex-row">
              {row.map((col, colIndex) => (
                <li
                  onClick={() => {
                    if (
                      grid[index][colIndex] === "" &&
                      !check &&
                      Object.keys(isEditing).length === 0
                    ) {
                      const newGrid = grid.map((item, i) =>
                        i === index
                          ? item.map((colItem, j) =>
                              j === colIndex ? chance : colItem
                            )
                          : item
                      );

                      setGrid(newGrid);

                      const ans = checkWinner(newGrid);
                      if (ans) setCheck(ans);
                      else{
                        if(move >= 8) setCheck('Draw')
                      }
                      const currentPlayer = chance === "X" ? player1 : player2;
                      setLogs((prev) => ({
                        ...prev,
                        [move]: `${currentPlayer} marked ${chance} on [${index}][${colIndex}]`,
                      }));
                      setMove((prev) => ++prev);
                      setChance(chance === "O" ? "X" : "O");
                    }
                  }}
                  key={colIndex}
                >
                  <div className="ring-1 h-30 w-30 m-3" id="cell">
                    {col}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayingGrid;
