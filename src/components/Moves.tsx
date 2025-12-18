const Moves = ({logs}: {logs: Record<number, string>}) => {
  return (
    <>
      {" "}
      <h1
        className={`mb-5 ${
          Object.keys(logs).length > 0 ? "block" : "invisible"
        }`}
      >
        Moves
      </h1>
      <div className=" h-40 overflow-auto px-5">
        <ul>
          {Object.entries(logs).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Moves;
