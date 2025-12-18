import { type Dispatch, type SetStateAction } from "react";

const Player = ({
  handleName,
  setIsEditing,
  playerId,
  player,
  isEditing,
}: {
  handleName: (name: string) => void;
  setIsEditing: Dispatch<SetStateAction<Record<string, boolean>>>;
  playerId: string;
  player: string;
  isEditing: boolean;
}) => {
  return (
    <form
      className="inline-block mx-3 my-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleName(player);
        setIsEditing((prev) => {
          const next = { ...prev };
          delete next[playerId];
          return next;
        });
      }}
    >
      <input
        className="mx-2"
        type="text"
        value={player}
        onChange={(e) => handleName(e.target.value)}
        disabled={!isEditing}
      />
      <button
        type="button"
        onClick={() => {
          setIsEditing((prev) => {
            const next = { ...prev };

            if (next[playerId]) delete next[playerId];
            else next[playerId] = true;
            return next;
          });
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </form>
  );
};

export default Player;
