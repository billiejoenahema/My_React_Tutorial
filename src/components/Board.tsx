import React from 'react'
import Square from './Square'

type Props = {
  squares: string[],
  onClick: React.MouseEvent<HTMLElement>
}

const Board: React.FC<Props> = ({ squares, onClick }) => {

  return (
    <div>
      {
        [...Array(3)].map((_, i) => {
          return (
            <div className="board-row" key={i} >
              {
                [...Array(3)].map((_, j) => {
                  const index = 3 * i + j
                  return (
                    <Square value={squares[index]} onClick={() => onClick(index)} key={j} />
                  )
                })
              }
            </div>
          )
        })
      }
    </div >
  )
}
export default Board
