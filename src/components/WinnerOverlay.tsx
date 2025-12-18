const WinnerOverlay = ({
  check,
  player1,
  player2,
  handleReset,
}: {
  check: string;
  player1: string;
  player2: string;
  handleReset: () => void;
}) => (
  <div
    className={`absolute w-full h-full flex flex-col text-center justify-center items-center text-4xl ${
      check ? "backdrop-blur-sm inset-0 text-white" : "hidden"
    }`}
  >
    <h3 className={`${check === "Draw" ? "hidden" : "block"}`}>
      And Your Winner is
    </h3>
    <h1>{check === "X" ? player1 : check === "O" ? player2 : "Match Draw"}</h1>
    <button className="w-fit mt-5 bg-white text-black" onClick={handleReset}>
      Reset
    </button>
  </div>
);

export default WinnerOverlay;
