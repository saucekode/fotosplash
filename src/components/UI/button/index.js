import React from 'react'

const Button = ({text, children, width, action}) => {

  const buttonStyle = {
    width: width || '101px',
    height: '32px',
    background: '#2F80ED',
    color: '#fff',
    fontSize: '12px',
    fontWeight: 500,
    border: 'none',
    borderRadius: '7px',
    cursor: 'pointer',
    position: 'relative'
  }

  return (
    <button style={buttonStyle} onClick={action}>
      {text}
      {children}
    </button>
  )
}

export default Button
