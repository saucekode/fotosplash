import React from 'react'

const Button = ({text, action, bgColor}) => {

  const buttonStyle = {
    padding: '10px 12px',
    background: bgColor,
    color: '#fff',
    fontSize: '12px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '7px',
    cursor: 'pointer',
    position: 'relative'
  }

  return (
    <button style={buttonStyle} className='btn' onClick={action}>
      {text}
    </button>
  )
}

export default Button
