import React, { useState } from "react";
import Board from "./Board";
import checkWinner from "../utils/ticTacToeUtils.js";

const TicTacToe = ({ size = 3 }) => {
  const [board, setBoard] = useState(
    Array.from({ length: size }, () => {
      return Array(size).fill(null);
    })
  );
  const [turnX, setTurnX] = useState(true);
  const winner = checkWinner(board, size);
  console.log("winner :", winner);
  const status = winner
    ? `Winner is ${winner}`
    : turnX
    ? "Player X Turn"
    : "Player O Turn";


  const handleClick = (rowIndex, colIndex) => {
    // console.log(rowIndex, colIndex);
    if (board[rowIndex][colIndex] || winner) return; // cell is already filled
    // deep copy
    const deepCopyofBoard = JSON.parse(JSON.stringify(board));
    // deepCopyofBoard[rowIndex][colIndex] = "X";
    deepCopyofBoard[rowIndex][colIndex] = turnX ? "X" : "O";
    setBoard(deepCopyofBoard);
    setTurnX(!turnX);
    console.log(deepCopyofBoard);
  };

  const handleReset = () => {
    setBoard(
      Array.from({ length: size }, () => {
        return Array(size).fill(null);
      })
    );
    setTurnX(true);
    console.log("board reset");
  }

  return (
    <div className="container">
      <Board board={board} size={size} handleClick={handleClick} />
      <div className="status">{status}</div>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default TicTacToe;
