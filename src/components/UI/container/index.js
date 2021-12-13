import React from 'react'
import '../../../App.css'

const Container = (
  {
    width,
    height,
    padding,
    children
  }
) => {

  const style = {
    width: width,
    height: height,
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0px 4px 12px 0px #0000001A',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: padding
  }

  return (
    <div style={style} className="appContainer">
      {children}
    </div>
  )
}

export default Container
