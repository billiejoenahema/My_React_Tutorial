import React, { useState } from "react"
import Board from './Board'
import Moves from './Moves'
import { calculateWinner } from '../calculateWinner'

const Game = React.memo(() => {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null)
  }])

  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = i => {
    const _history = history.slice(0, stepNumber + 1)

    const current = _history[_history.length - 1]
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = xIsNext ? "X" : "O"

    setHistory(history.concat([{ squares }]))
    setStepNumber(history.length)
    setXIsNext(!xIsNext)
  }

  const jumpTo = step => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
    if (step === 0) {
      setHistory([{ squares: Array(9).fill(null) }])
    }
  }

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)

  let status
  if (winner) {
    status = `勝者: ${winner}`
  } else {
    status = `次のプレーヤー: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => { handleClick(i) }} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <Moves history={history} setHistory={setHistory} jumpTo={jumpTo} />
      </div>
    </div>
  )
})
export default Game
