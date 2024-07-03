import React, { useState } from 'react'
import Board from './Board'

const TicTacToe = ({size = 3}) => {

  const [board, setBoard] = useState(Array.from({length: size}, ()=> {
    return Array(size).fill(null);
  }))
 
  const handleClick = (rowIndex, colIndex) => {
    console.log(rowIndex, colIndex);
  }

  return (
    <div className='container'>
     <Board board={board} size={size} handleClick={handleClick} />
      <div className="status">status</div>
      <button>reset</button>
    </div>
  )
}

export default TicTacToe
