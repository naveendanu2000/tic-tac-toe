const checkRight = (arr: string[][], i: number, j: number) => {
  if (arr[i][0] !== "" && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2])
    return arr[i][j];
  else return "";
};
const checkBottom = (arr: string[][], i: number, j: number) => {
  if (arr[0][j] !== "" && arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j])
    return arr[i][j];
  else return "";
};
const checkBottomRight = (arr: string[][], i: number, j: number) => {
  if (
    arr[i][j] !== "" &&
    arr[i][j] === arr[i + 1][j + 1] &&
    arr[i + 1][j + 1] === arr[i + 2][j + 2]
  )
    return arr[i][j];
  else return "";
};
const checkBottomLeft = (arr: string[][], i: number, j: number) => {
  if (
    arr[i][j] !== "" &&
    arr[i][j] === arr[i + 1][j - 1] &&
    arr[i + 1][j - 1] === arr[i + 2][j - 2]
  )
    return arr[i][j];
  else return "";
};

export const checkWinner = (arr: string[][]) => {
  for (let i = 0; i < arr.length; i++) {
    const Rres = checkRight(arr, i, 0);
    const Bres = checkBottom(arr, 0, i);
    if (Bres === "X" || Bres === "O") return Bres;
    if (Rres === "X" || Rres === "O") return Rres;
  }
  const BRres = checkBottomRight(arr, 0, 0);
  const BLres = checkBottomLeft(arr, 0, 2);

  return BRres === "X" || BRres === "O" ? BRres : BLres;
};
