import React from 'react'

const Board = ({ size , board, handleClick }) => {
  return (

        <div className="board" style={{ gridTemplateColumns: `repeat(${size}, 60px)`}} >
              {  board.map((row,rowIndex) => {
                return row.map((cell,colIndex) => {
                    return <div key={colIndex} onClick={() =>handleClick(rowIndex,colIndex)} className="cell">
                        {cell}
                    </div>
                })
            })}
        </div>
      
   
  )
}

export default Board