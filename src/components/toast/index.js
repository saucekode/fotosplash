import React from 'react'
import '../../App.css'

const Toast = ({text, close, bg, isClosing}) => {
  return (
    <div className="Toast_style" style={{backgroundColor: bg, justifyContent: isClosing ? 'center' : 'space-between'}}>
      <p>{text}</p>
      {isClosing && <p style={{paddingLeft: '25px'}} onClick={close}>&#10005;</p>}
    </div>
  )
}

export default Toast
