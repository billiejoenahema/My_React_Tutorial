import React from 'react'

const squareStyle = {
  height: '64px',
  width: '64px',
  fontSize: '36px'
}

const Square: React.NamedExoticComponent<object> = React.memo(({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick} style={squareStyle}>
      {value}
    </button>
  )
})
export default Square
