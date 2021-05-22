import React from 'react'
import { Button } from '@material-ui/core'

const Moves = React.memo(({ history, setHistory, jumpTo }) => {
  return (
    <ol>
      {history.map((_, move) => {
        const description = move ? `${move}番に移動` : `ゲームスタート`
        return (
          <li className="moves-list" key={move}>
            <Button onClick={() => {
              jumpTo(move, setHistory)
            }}
              variant="contained"
            >
              {description}
            </Button>
          </li>
        )
      })}
    </ol >
  )
})
export default Moves
