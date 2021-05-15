import React from 'react'

const Moves = ({ history, setHistory, jumpTo }) => {
  return (
    <ol>
      {history.map((_, move) => {
        const desc = move ? `${move}番に移動` : `ゲームスタート`
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move, setHistory)}>{desc}</button>
          </li>
        )
      })}
    </ol>
  )
}
export default Moves
